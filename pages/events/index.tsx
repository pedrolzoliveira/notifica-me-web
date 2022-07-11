import { useEvents } from "../../hooks/events-hooks";
import { useEventTypes } from "../../hooks/event-types-hooks";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Table, TBody, THead, Td, Th, Tr } from "../../components/table";
import { Button } from "../../components/Button";

const Events = () => {

    const { data: eventTypes, isLoading } = useEventTypes();
    const { data: events } = useEvents();


    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <AiOutlineLoading3Quarters className="animate-spin h-20 w-20"/>
            </div>
        )
    } 

    return (
        <div className="p-4 w-full space-y-4">
            <div className="flex justify-between">
                <h1 className="font-bold text-lg">Eventos</h1>
                <Button onClick={() => {alert("o")}}>Adicionar</Button>
            </div>
            <Table>
                <THead>
                    <tr>
                        <Th className='w-36'>code</Th>
                        <Th className='w-44'>Nome</Th>
                        <Th>Descrição</Th>
                        <Th className='w-48'>Criado em</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        eventTypes?.map(eventType => {
                            return (
                                <Tr key={eventType.code}>
                                    <Td>{eventType.code}</Td>
                                    <Td>{eventType.name}</Td>
                                    <Td>{eventType.description}</Td>
                                    <Td>{new Date(eventType.createdAt).toLocaleString()}</Td>
                                </Tr>
                            )
                        })
                    }
                </TBody>
            </Table>
        </div>
    )

    return (
        <div className="p-4 w-full">
            <Table>
                <THead>
                    <tr>
                        <Th className='w-36'>Código</Th>
                        <Th>Texto</Th>
                        <Th className='w-48'>Data</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        events?.map(event => {
                            return (
                                <Tr key={event.id} >
                                    <Td>{event.code}</Td>
                                    <Td>{event.text}</Td>
                                    <Td>{event.createdAt}</Td>
                                </Tr>
                            )
                        })
                    } 
                </TBody>
            </Table>
        
        </div>
    )
}

export default Events;

