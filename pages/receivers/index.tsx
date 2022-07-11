import { BsWhatsapp } from 'react-icons/bs';

import { CreateReceiverModal } from '../../components/modals/create-receiver-modal/create-receiver-modal';
import { TrashButton } from '../../components/TrashButton';

import { AiOutlineLoading3Quarters, AiOutlineEdit } from 'react-icons/ai';;

import { useReceivers, useDestroyReceiver } from '../../hooks/receivers-hooks';
import { Table, THead, TBody, Td, Th, Tr } from '../../components/table';
import { Button } from '../../components/Button';
import { useState } from 'react';




const Receivers = () => {

    const { data: receivers, isLoading } = useReceivers();

    const [modalOpen, setModalOpen] = useState(false);


    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <AiOutlineLoading3Quarters className='animate-spin h-20 w-20'/>
            </div>
        )
    }

    return (
        <div className="p-4 w-full">
            <div className='flex justify-between mb-4'>
                <h1 className='font-bold text-lg'>Recebedores</h1>
                <Button onClick={() => { setModalOpen(true) }}>Adicionar</Button>
            </div>
            <Table >
                <THead>
                    <tr>
                        <Th className='w-36'>Nome</Th>
                        <Th className='w-36'>Contato</Th>
                        <Th className=''>Eventos Registrados</Th>
                        <Th className='w-12'>Ações</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        receivers?.map(receiver => {
                            
                            return (
                                <Tr key={receiver.id} >
                                    <Td>{receiver.name}</Td>
                                    <Td className='flex items-center space-x-2'>
                                        <BsWhatsapp/>
                                        <span>
                                            {receiver.number}
                                        </span>
                                    </Td>
                                    <Td>{receiver.registeredEvents.map(registeredEvent => registeredEvent.eventCode)}</Td>
                                    <Td className='flex justify-center space-x-4'>
                                        <button className='p-2 rounded hover:bg-slate-500'>
                                            <AiOutlineEdit/>
                                        </button>
                                        <TrashButton useMutation={() => useDestroyReceiver(receiver.id)}/>
                                    </Td>
                                </Tr>
                            )
                        })
                    }                    
                </TBody>
            </Table>
            <CreateReceiverModal open={modalOpen} onClose={() => { setModalOpen(false) }}/>
        </div>
    )
}


export default Receivers;
