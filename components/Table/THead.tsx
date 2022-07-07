import { ReactNode } from "react";

type THeadProps = {
    children: ReactNode
}


export const THead = ({ children }: THeadProps) => {
    return (
        <thead className="bg-gray-50 border-b-2 border-gray-200">
            { children }
        </thead>
    )
}