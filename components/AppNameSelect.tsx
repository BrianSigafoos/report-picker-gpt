import type { FC } from 'react'

import { APP_NAME } from '@/lib/constants'

interface Props {
  language: string
  onChange: (language: string) => void
}

export const AppNameSelect: FC<Props> = ({ language, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  return (
    <select className='txt-input' value={language} onChange={handleChange}>
      {APP_NAME.sort((a, b) => a.label.localeCompare(b.label)).map(
        (app) => (
          <option key={app.value} value={app.value}>
            {app.label}
          </option>
        )
      )}
    </select>
  )
}
