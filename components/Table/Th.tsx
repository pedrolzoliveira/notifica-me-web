import { ReactNode } from 'react'

interface ThProps {
  children: ReactNode
  className?: string
}

export const Th = ({ children, className }: ThProps) => {
  return (
    <th className={`p-3 text-sm font-semibold tracking-wide text-left ${className}`}>
      { children }
    </th>
  )
}
