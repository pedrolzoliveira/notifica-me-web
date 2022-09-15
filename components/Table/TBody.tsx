import { ReactNode } from 'react'

interface TBodyProps {
  children: ReactNode
  className?: string
}
export const TBody = ({ children, className }: TBodyProps) => {
  return (
        <tbody className={className}>
            { children }
        </tbody>
  )
}
