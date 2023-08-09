export type OpenAIModel = 'gpt-3.5-turbo-0613' | 'gpt-4-0613'

export interface GenerateBody {
  appName: string
  appReports: string
  question: string
  model: OpenAIModel
  apiKey: string
}

export interface AvailableReportsType {
  [key: string]: Array<{ key: string, description: string, filters: string[] }> | undefined
}
