
type CreateEventTypesModalProps = {
    open: boolean;
    onClose: Function;
}


export const CreateEventTypesModal = ({ open, onClose }: CreateEventTypesModalProps) => {

    if (!open) return null;

    return (
        <div className="absolute bg-black inset-0 bg-opacity-50 flex items-center justify-center">

        </div>
    )
}