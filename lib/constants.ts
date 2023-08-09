export const APP_TITLE = 'Report Picker GPT'
export const APP_DESCRIPTION =
  'Generate queries by asking questions about your data'

export const MAX_COMBINED_LENGTH = 6000

export const LANGUAGE_MODELS = [
  { value: 'gpt-3.5-turbo', label: 'OpenAI GPT-3.5' },
  { value: 'gpt-4', label: 'OpenAI GPT-4' }
]

export const APP_NAME = [
  { value: 'PayPal', label: 'PayPal' },
  { value: 'Square', label: 'Square' },
  { value: 'Stripe', label: 'Stripe' },
  { value: 'Other', label: 'Other' }
]

const OTHER_REPORTS = [{
  key: 'ExampleReportName',
  description: 'Example Report: A great description of the report with as many relevant details as possible to help Report Picker GPT select this report when relevant.',
  filters: ['date', 'amount']
}]

// TODO: add these reports
const PAYPAL_REPORTS = OTHER_REPORTS

const SQUARE_REPORTS = [
  {
    key: 'SalesSummary',
    description: 'Sales Summary: A general overview of sales from a given time period. The report includes itemization metrics like gross sales, refunds, net sales, discounts, tips, and taxes. It also includes payment metrics like total collected (revenue by tender type) and fees.',
    filters: [
      'date',
      'amount'
    ]
  },
  {
    key: 'SalesTrends',
    description: 'Sales Trends: Compares your daily, weekly, and yearly gross sales.',
    filters: [
      'date',
      'amount'
    ]
  },
  {
    key: 'PaymentMethods',
    description: 'Payment Methods: A summary of the total collected and any associated fees from credit, debit and gift cards, and any other tender types. The reports include payments broken down by debit vs credit, as well as by card brand - American Express, Visa, Mastercard, etc. with corresponding fees. Adjust filters to change the data displayed in the breakdown.',
    filters: [
      'date'
    ]
  },
  {
    key: 'ItemSales',
    description: 'Item Sales: Shows details for all items sold including gross sales, net sales, SKUs, discounts, and total sold. Use advanced reporting options to display item sales by device, employee, or payment method. Note: Click an item in your report to see an item dropdown - specific sales info on that item and all its variations.',
    filters: [
      'date',
      'location'
    ]
  },
  {
    key: 'CategorySale',
    description: 'Category Sale: An overview of top grossing categories and the number of items sold within each category.',
    filters: [
      'date'
    ]
  },
  {
    key: 'TeamMemberSales',
    description: "Team Member Sales: If you're subscribed to Team Plus, show sales per employee, tips, average sale size and revenue per labor hour.",
    filters: [
      'date',
      'location'
    ]
  },
  {
    key: 'LaborVs.Sales',
    description: "Labor vs. Sales: If you're subscribed to Team Plus, track wages and see how your labor cost compares to sales.",
    filters: [
      'date'
    ]
  },
  {
    key: 'Discounts',
    description: 'Discounts: A list of the top used discounts and total discount amounts collected.',
    filters: [
      'date',
      'amount'
    ]
  },
  {
    key: 'ModifierSales',
    description: 'Modifier Sales: A list of the top used modifiers in a given time period.',
    filters: [
      'date'
    ]
  },
  {
    key: 'Comps',
    description: 'Comps: A list of transactions with comped items.',
    filters: [
      'date'
    ]
  },
  {
    key: 'Voids',
    description: 'Voids: A list of transactions with voided items.',
    filters: [
      'date'
    ]
  },
  {
    key: 'Taxes',
    description: "Taxes: An overview of how your tax rates are being used in a given time period, including taxable and non-taxable sales. You'll need to create items with applied tax rates to track “taxable” sales in your reports. Note: “Taxable sales” may not add up to the “total” tax collected because some sales and items may have multiple tax rates applied.",
    filters: [
      'date'
    ]
  },
  {
    key: 'TransactionStatus',
    description: 'Transaction Status: A list of any unprocessed transactions – declined cards, canceled payments, and other uncompleted transactions.',
    filters: [
      'date'
    ]
  },
  {
    key: 'GiftCards',
    description: 'Gift Cards: Tracks everything related to your Square gift card activity.',
    filters: [
      'date'
    ]
  },
  {
    key: 'Transactions',
    description: 'Transactions: A list of individual transactions and transaction details from a given time period. Find this report in Transactions in your online Square Dashboard.',
    filters: [
      'date'
    ]
  },
  {
    key: 'Balance',
    description: 'Balance: A list of individual transfers and the payments included in each transfer, along with your entire transfer history. View this report in Balance in your online Square Dashboard.',
    filters: [
      'date'
    ]
  },
  {
    key: 'Disputes',
    description: 'Disputes: View, manage, and get updates on any disputes you may receive.',
    filters: [
      'date'
    ]
  },
  {
    key: 'CashDrawers',
    description: 'Cash Drawers: Tracks individual cash drawer sessions and your full cash drawer history.',
    filters: [
      'date'
    ]
  },
  {
    key: 'ActivityLog',
    description: 'Activity Log: Tracks sensitive actions taken by your team — such as processed refunds, updates to item inventory, changes to tip settings, comps/voids, and discounts.',
    filters: [
      'date'
    ]
  }
]

// TODO: add these reports
const STRIPE_REPORTS = OTHER_REPORTS

export const AVAILABLE_REPORTS = {
  Other: OTHER_REPORTS,
  PayPal: PAYPAL_REPORTS,
  Square: SQUARE_REPORTS,
  Stripe: STRIPE_REPORTS
}
