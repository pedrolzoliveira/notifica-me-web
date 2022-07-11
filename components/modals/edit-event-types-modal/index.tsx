import { FormEvent, useState } from "react";
import { useUpdateEventType } from "../../../hooks/event-types-hooks";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Button } from "../../Button";

type EditEventTypeModalProps = {
    eventType?: {
        code: string;
        name?: string;
        description?: string;
    };
    onClose: Function;
}


export const EditEventTypeModal = ({ eventType, onClose }: EditEventTypeModalProps) => {

    if (!eventType) return null;

    const { mutateAsync: update, isLoading } = useUpdateEventType(eventType.code);
    

    const [name, setName] = useState(eventType.name || "")
    const [description, setDescription] = useState(eventType.description || "")


    const handleClose = () => {
        setName('');
        setDescription('');
        onClose();
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) return;
        await update({
            name,
            description
        });
        handleClose();
    }

    

    return (
        <div className="absolute bg-black inset-0 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white rounded p-8 w-96">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <h1 className="font-semibold text-gray-700 text-xl">Editar Tipo de Evento</h1>
                    <div className="pt-4">
                        <label htmlFor="number" className="text-gray-700 font-semibold">Código</label>
                        <input type="text" value={eventType.code} readOnly className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div>
                        <label htmlFor="number" className="text-gray-700 font-semibold">Nome</label>
                        <input type="text"  value={name} onChange={e => setName(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div>
                        <label htmlFor="number" className="text-gray-700 font-semibold">Descrição</label>
                        <textarea  value={description} onChange={e => setDescription(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                    </div>
                    <div className="space-x-4 w-full flex pt-4">
                        <Button className="w-full" onClick={handleClose}>Cancelar</Button>
                        <Button  className="w-full flex items-center justify-center" type="submit">
                            {
                                isLoading ? 
                                <AiOutlineLoading3Quarters className="animate-spin"/>
                                :
                                "Salvar"
                            }
                            
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}