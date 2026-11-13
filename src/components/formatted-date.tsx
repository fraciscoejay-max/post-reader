type FormattedDateProps = {
  value?: string | null
  className?: string
}

const formatter = new Intl.DateTimeFormat('en', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

export default function FormattedDate({ value, className }: FormattedDateProps) {
  if (!value) return null

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return null

  return <time dateTime={value} className={className}>{formatter.format(date)}</time>
}
