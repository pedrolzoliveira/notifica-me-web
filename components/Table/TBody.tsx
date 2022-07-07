import { ReactNode } from "react"

type TBodyProps = {
    children: ReactNode
}
export const TBody = ({ children } : TBodyProps) => {
    return (
        <tbody>
            { children }
        </tbody>
    )
}