import { AvailableReportsType } from '@/types/types'

import OTHER_REPORTS from '@/lib/available_reports/other.json'
import PAYPAL_REPORTS from '@/lib/available_reports/paypal.json'
import SQUARE_REPORTS from '@/lib/available_reports/square.json'
import STRIPE_REPORTS from '@/lib/available_reports/stripe.json'

export const APP_TITLE = 'Report Picker GPT'
export const APP_DESCRIPTION =
  'Quickly find the right report to answer questions about your business'

export const MAX_COMBINED_LENGTH = 6000

export const LANGUAGE_MODELS = [
  { value: 'gpt-3.5-turbo', label: 'OpenAI GPT-3.5' },
  { value: 'gpt-4', label: 'OpenAI GPT-4' }
]

export const APP_NAME = [
  { value: 'Other', label: 'Other' },
  { value: 'PayPal', label: 'PayPal' },
  { value: 'Square', label: 'Square' },
  { value: 'Stripe', label: 'Stripe' }
]

export const AVAILABLE_REPORTS: AvailableReportsType = {
  Other: OTHER_REPORTS,
  PayPal: PAYPAL_REPORTS,
  Square: SQUARE_REPORTS,
  Stripe: STRIPE_REPORTS
}
