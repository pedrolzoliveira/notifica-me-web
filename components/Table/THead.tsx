import { ReactNode } from "react";

type THeadProps = {
    children: ReactNode;
    className?: string;
}


export const THead = ({ children, className }: THeadProps) => {
    return (
        <thead className={`bg-gray-50 border-b-2 border-gray-200 ${className}`}>
            { children }
        </thead>
    )
}