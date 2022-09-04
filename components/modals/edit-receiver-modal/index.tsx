import { useState, FormEvent } from 'react';
import { useUpdateReceiver } from '../../../hooks/receivers-hooks';
import { useEventTypes } from '../../../hooks/event-types-hooks';
import { Button } from '../../Button';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';
import { Input } from '../../Input';
import ReactInputMask from 'react-input-mask';

type EditReceiverModalProps = {
    receiver?: {
        id: string;
        name: string;
        number: string;
        messenger: 'whatsapp' | 'telegram' | 'sms'
        events: {
            id: string;
            code: string;
            receiverId: string;
        }[],
    }
    onClose: Function;
}

export const EditReceiverModal = ({ receiver, onClose }: EditReceiverModalProps) => {
    if (!receiver) return null;

    
    const { mutateAsync: update, isLoading, error } = useUpdateReceiver(receiver.id);
    const { data: eventTypes, isLoading: eventTypeLoading } = useEventTypes();
    
    const [name, setName] = useState(receiver.name);
    const [events, setevents] = useState(receiver.events.map(event => event.code));
    
    const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) return;
        await update({
            name,
            events
        });
        handleClose();
    }
    
    const handleNameChange = (e: any) => {
        setName(e.target.value);
    }
    
    
    const handleClose = () => {
        setName('');
        onClose();
    }
    
    if (!open) return null;

    return (
        <div className='absolute bg-black inset-0 bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white rounded p-8 w-96'>
                <form className='space-y-4' onSubmit={handlesubmit}>
                    <h1 className='font-semibold text-gray-700 text-xl'>Editar Recebedor</h1>
                    <div className='pt-4'>
                        <label htmlFor='name' className='text-gray-700 font-semibold'>Nome</label>
                        <Input type='text' value={name} onChange={handleNameChange}/>
                    </div>
                    <div>
                        <label htmlFor='type' className='text-gray-700 font-semibold'>Tipo</label>
                        <Input
                        value={receiver.messenger}
                        readOnly
                        />
                    </div>
                    <div>
                        <label htmlFor='number' className='text-gray-700 font-semibold'>Número</label>
                        <ReactInputMask
                        mask={'+99 (99) 99999-9999'}
                        type='text'
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        value={receiver.number}
                        readOnly/>
                    </div>
                    <div>
                        <span className='text-gray-700 font-semibold'>Eventos</span>
                        <div className='flex flex-col space-y-1 h-60'>
                            {
                                eventTypeLoading ? 
                                <AiOutlineLoading3Quarters className='animate-spin'/>
                                : null
                            }
                            {
                                eventTypes?.map(event => {
                                    return (
                                        <div className='flex items-center space-x-2' key={event.code}>
                                            <input type='checkbox' checked={events.includes(event.code)} onChange={e => {
                                                if (e.target.checked) {
                                                    setevents([...events, event.code]);
                                                } else {
                                                    setevents(events.filter(str => str !== event.code))
                                                }                          
                                            }} className='cursor-pointer'/>
                                            <span>
                                                {event.code}
                                            </span>
                                        </div>
                                    )
                                })
                            }
                        </div>
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
                                'Salvar'
                            }
                            
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}
