import { useState } from 'react';
import { useEvents } from '../../hooks/events-hooks';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Table, TBody, THead, Td, Th, Tr } from '../../components/Table';
import { CreateEventTypesModal } from '../../components/modals/create-event-types-modal/create-event-types-modal';
import { EditEventTypeModal } from '../../components/modals/edit-event-types-modal';
   
const Events = () => {

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editEventType, setEditEventType] = useState<{
        code: string;
        name?: string;
        description?: string;
    }>();
    const { data: events, isLoading } = useEvents();

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
                <h1 className='font-bold text-lg'>Eventos</h1>
            </div>
            <Table>
                <THead>
                    <tr>
                        <Th className='w-36'>code</Th>
                        <Th>Texto</Th>
                        <Th className='w-48'>Criado em</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        events?.map(event => {
                            return (
                                <Tr key={event.code}>
                                    <Td className='font-semibold'>{event.code}</Td>
                                    <Td>{event.text}</Td>
                                    <Td>{new Date(event.createdAt).toLocaleString()}</Td>
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

export default Events;
