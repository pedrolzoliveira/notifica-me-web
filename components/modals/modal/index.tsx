import { ReactFragment } from 'react';

type ModalProps = {
    open: boolean;
    children: ReactFragment;
    onClose?: Function;

}

export const Modal = ({ children, open } : ModalProps) => {

    if (!open) return null;

    return (
        <div>
            { children }
        </div>
    )
}
