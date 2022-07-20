import { useState, FormEvent } from 'react';
import { useAddReceiver } from '../../../hooks/receivers-hooks';
import { Button } from '../../Button';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';

type CreateReceiverModalProps = {
    open: boolean;
    onClose: Function;
}

export const CreateReceiverModal = ({ open, onClose }: CreateReceiverModalProps) => {

    const { mutateAsync: add, isLoading, error } = useAddReceiver();
    const [name, setName] = useState('');
    const [number, setNumber] = useState('+55');
    const [messenger, setMessenger] = useState<'whatsapp' | 'telegram' | 'sms'>('whatsapp');

    const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) return;

        await add({
            name,
            messenger,
            number,
            customerId: 'be6366bb-1bf0-4f04-ad46-73a351689d80',
        });
        handleClose();
    }

    const handleNameChange = (e: any) => {
        setName(e.target.value);
    }

    const handleMessengerChange = (e: any) => {
        setMessenger(e.target.value);
    }

    const handleNumberChange = (e: any) => {
        setNumber(e.target.value);
    }

    const handleClose = () => {
        setName('');
        setNumber('');
        setMessenger('whatsapp');
        onClose();
    }

    if (!open) return null;

    return (
        <div className='absolute bg-black inset-0 bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white rounded p-8 w-96'>
                <form className='space-y-4' onSubmit={handlesubmit}>
                    <h1 className='font-semibold text-gray-700 text-xl'>Adicionar Recebedor</h1>
                    <div className='pt-4'>
                        <label htmlFor='name' className='text-gray-700 font-semibold'>Nome</label>
                        <input type='text' value={name} onChange={handleNameChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '/>
                    </div>
                    <div>
                        <label htmlFor='type' className='text-gray-700 font-semibold'>Tipo</label>
                        <select value={messenger} onChange={handleMessengerChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
                            <option value={'whatsapp'}>WhatsApp</option>
                            <option value={'telegram'}>Telegram</option>
                            <option value={'sms'}>SMS</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='number' className='text-gray-700 font-semibold'>Número</label>
                        <input type='text'  value={number} onChange={handleNumberChange} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                    </div>
                    {
                        error ?
                        <div className='flex text-red-600 space-x-2 items-center font-semibold'>
                           <BiError/>
                           <p>Error!</p> 
                        </div>
                        :
                        null
                    }
                    <div className='space-x-4 w-full flex pt-4'>
                        <Button className='w-full' onClick={handleClose}>Cancelar</Button>
                        <Button  className='w-full flex items-center justify-center' type='submit'>
                            {
                                isLoading ? 
                                <AiOutlineLoading3Quarters className='animate-spin'/>
                                :
                                'Adicionar'
                            }
                            
                        </Button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}