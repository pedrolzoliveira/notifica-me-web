import { ReactNode } from 'react'

interface TableProps {
  children: ReactNode
  className?: string
}

export const Table = ({ children, className }: TableProps) => {
  return (
        <table className={`w-full shadow border ${className}`}>
            {children}
        </table>
  )
}
