import { useState } from 'react';
import { useEventTypes, useDestroyEventType } from '../../hooks/event-types-hooks';
import { AiOutlineLoading3Quarters, AiOutlineEdit } from 'react-icons/ai';
import { Table, TBody, THead, Td, Th, Tr } from '../../components/table';
import { Button } from '../../components/Button';
import { CreateEventTypesModal } from '../../components/modals/create-event-types-modal/create-event-types-modal';
import { EditEventTypeModal } from '../../components/modals/edit-event-types-modal';
import { TrashButton } from '../../components/TrashButton';

const EventTypes = () => {

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editEventType, setEditEventType] = useState<{
        code: string;
        name?: string;
        description?: string;
    }>();
    const { data: eventTypes, isLoading } = useEventTypes();

    if (isLoading) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <AiOutlineLoading3Quarters className='animate-spin h-20 w-20'/>
            </div>
        )
    } 

    return (
        <div className='p-4 w-full'>
            <div className='flex justify-between pb-4'>
                <h1 className='font-bold text-lg'>Tipos de Eventos</h1>
                <Button onClick={() => { setCreateModalOpen(true) }}>Adicionar</Button>
            </div>
            <Table>
                <THead>
                    <tr>
                        <Th className='w-36'>code</Th>
                        <Th className='w-44'>Nome</Th>
                        <Th>Descrição</Th>
                        <Th className='w-48'>Criado em</Th>
                        <Th className='w-12'>Ações</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        eventTypes?.map(eventType => {
                            return (
                                <Tr key={eventType.code}>
                                    <Td className='font-semibold'>{eventType.code}</Td>
                                    <Td>{eventType.name}</Td>
                                    <Td>{eventType.description}</Td>
                                    <Td>{new Date(eventType.createdAt).toLocaleString()}</Td>
                                    <Td className='flex justify-center space-x-4'>
                                        <button className='p-2 rounded hover:bg-blue-100' onClick={()=> setEditEventType(eventType)} >
                                            <AiOutlineEdit/>
                                        </button>
                                        <TrashButton useMutation={() => useDestroyEventType(eventType.code)}/>
                                    </Td>
                                </Tr>
                            )
                        })
                    }
                </TBody>
            </Table>
            <CreateEventTypesModal open={createModalOpen} onClose={() => setCreateModalOpen(false)}/>
            <EditEventTypeModal eventType={editEventType} onClose={() => setEditEventType(undefined)}/> 
        </div>
    )
}

export default EventTypes;
