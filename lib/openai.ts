import endent from 'endent'
import {
  createParser,
  ParsedEvent,
  ReconnectInterval
} from 'eventsource-parser'

import GET_REPORT_LINK_CHAT_FUNCTION from '@/lib/chat_functions.json'

const createPrompt = (
  appReports: string
) => {
  return endent`
  You are an expert at determining the best report given a user's question about their business.
  Use the list of "Available reports:" and "Question:", return the report that you would recommend. Just return the report "key" and any relevant filters.

  Available reports:
  ${appReports}
  `
}


export const OpenAIStream = async (
  appName: string,
  appReports: string,
  question: string,
  model: string,
  key: string
) => {
  const prompt = createPrompt(appReports)
  console.log('--- System prompt ---', prompt)

  const systemMsg = { role: 'system', content: prompt }
  const userMsg = { role: 'user', content: question}
  const body = JSON.stringify({
      model,
      messages: [systemMsg, userMsg],
      functions: [GET_REPORT_LINK_CHAT_FUNCTION],
      // function_call: GET_REPORT_LINK_CHAT_FUNCTION["name"],
      temperature: 0,
      stream: true
  })

  console.log('--- body ---', body)

  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${key || process.env.OPENAI_API_KEY}`
    },
    method: 'POST',
    body: body
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
      const onParse = (event: ParsedEvent | ReconnectInterval) => {
        if (event.type === 'event') {
          const data = event.data

          if (data === '[DONE]') {
            controller.close()
            return
          }

          try {
            const json = JSON.parse(data)
            const text = json.choices[0].delta.content
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
