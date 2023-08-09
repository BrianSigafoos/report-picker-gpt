interface Props {
  text: string
  editable?: boolean
  rows?: number
  onChange?: (value: string) => void
}

export const TextBlock: React.FC<Props> = ({
  text,
  editable = false,
  rows = 10,
  onChange = () => {}
}) => {
  return (
    <div className='relative'>
      <textarea
        className='txt-input py-1.5'
        style={{ resize: 'none' }}
        value={text}
        rows={rows}
        onChange={(e) => onChange(e.target.value)}
        disabled={!editable}
      />
    </div>
  )
}
