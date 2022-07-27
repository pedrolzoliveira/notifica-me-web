import { ReactNode } from 'react';

export type BadgeProps = {
    children: ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
    return (
        <span className='bg-slate-200 font-semibold py-1 px-2 rounded-xl text-sm'>
            {children}
        </span>
    )
}
