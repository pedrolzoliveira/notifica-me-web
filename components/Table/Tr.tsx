import { ReactNode } from "react";

type TrProps = {
    children: ReactNode
}

export const Tr = ({ children }: TrProps) => {
    return (
        <tr className="odd:bg-white even:bg-gray-50">
            { children }
        </tr>
    )
}