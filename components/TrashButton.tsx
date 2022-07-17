import { useState, DetailedHTMLProps, ButtonHTMLAttributes, MouseEvent } from 'react';
import { UseMutationResult } from 'react-query';
import { BiTrash } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const TrashButton = (props : DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & { useMutation: () => UseMutationResult<boolean, unknown, void, unknown> }) => {
    
    const [focused, setFocused] = useState(false);
    const { mutateAsync: destroy, isLoading } = props.useMutation?.()

    const handleClick = async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
        if (isLoading) return;

        if (focused) {
            await destroy?.();
            return;
        } 
        setFocused(true);
        setTimeout(() => {
            setFocused(false);
        }, 3000);
        return;
    }

    return (
        <button {...props} onClick={handleClick} className={`p-2 ${(focused || isLoading) ? 'bg-red-500 text-white rounded' : ''}`}>
            {
                isLoading ?
                <AiOutlineLoading3Quarters className='animate-spin'/>
                : 
                <BiTrash/>
            }
        </button>
    )
}
