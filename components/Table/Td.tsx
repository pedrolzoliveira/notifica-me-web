import { ReactNode } from 'react'

interface TdProps {
  children: ReactNode
  className?: string
}

export const Td = ({ children, className }: TdProps) => {
  return (
    <td className={`p-3 text-sm text-gray-700 whitespace-nowrap ${className}`}>
      { children }
    </td>
  )
}
