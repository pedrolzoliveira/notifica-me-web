import { ReactNode } from "react"

type TdProps = {
    children: ReactNode
}

export const Td = ({ children }: TdProps) => {
    return (
        <td className="p-3 text-sm text-gray-700">
            { children }
        </td>
    )
}