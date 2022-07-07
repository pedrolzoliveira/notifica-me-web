import { ReactNode } from "react"

type TableProps = {
    children: ReactNode
}

export const Table = ({ children }: TableProps) => {
    return (
        <table className='w-full shadow border'>
            {children}
        </table>
    )
}
