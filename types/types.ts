export type OpenAIModel = 'gpt-3.5-turbo' | 'gpt-4'

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
