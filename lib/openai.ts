import endent from 'endent'
import {
  createParser,
  ParsedEvent,
  ReconnectInterval
} from 'eventsource-parser'

import GET_REPORT_LINK_CHAT_FUNCTION from '@/lib/chat_functions.json'
import PROMPT_TEMPLATE from '@/lib/prompt_template.json'

const createSystemPrompt = (
  appReports: string
) => {
  const dateToday = new Date().toISOString().split('T')[0]

  return endent`
  ${PROMPT_TEMPLATE.prompt}

  Today's date: ${dateToday}

  Available reports:
  ${appReports}
  `
}

export const OpenAIStream = async (
  appReports: string,
  question: string,
  model: string,
  key: string
) => {
  const prompt = createSystemPrompt(appReports)
  console.log('\n--- system prompt ---\n', prompt)

  const systemMsg = { role: 'system', content: prompt }
  const userMsg = { role: 'user', content: question }
  const messages = [systemMsg, userMsg]
  const functions = [GET_REPORT_LINK_CHAT_FUNCTION]
  // The `function_call` API arg can be: "none" | "auto" | {"name": "<function_name>"}
  // Here we tell OpenAI to always reply using this function.
  const functionCall = { name: GET_REPORT_LINK_CHAT_FUNCTION.name }

  const body = JSON.stringify({
    model,
    messages,
    functions,
    function_call: functionCall,
    temperature: 0,
    stream: true
  })

  console.log('\n--- request body ---\n', body)

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key || process.env.OPENAI_API_KEY}`
    },
    method: 'POST',
    body
  })

  const encoder = new TextEncoder()
  const decoder = new TextDecoder()

  if (res.status !== 200) {
    const statusText = res.statusText
    const result = await res.body?.getReader().read()
    throw new Error(
      `OpenAI API returned an error: ${
        decoder.decode(result?.value) || statusText
      }`
    )
  }

  const stream = new ReadableStream({
    async start (controller) {
      console.log('\n--- response ---\n')
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === 'event') {
          const data = event.data

          if (data === '[DONE]') {
            controller.close()
            return
          }

          try {
            const json = JSON.parse(data)
            // console.log(json)
            // Handle both cases of responses with "function_call" and those with basic "content"
            const text = json.choices[0].delta?.content
              ? json.choices[0].delta.content
              : json.choices[0].delta?.function_call?.arguments
            const queue = encoder.encode(text)
            controller.enqueue(queue)
          } catch (e) {
            controller.error(e)
          }
        }
      }

      const parser = createParser(onParse)

      for await (const chunk of res.body as any) {
        parser.feed(decoder.decode(chunk))
      }
    }
  })

  return stream
}
