import { useEvents } from "../../hooks/events-hooks";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Table, TBody, THead, Td, Th, Tr } from "../../components/Table";

const Events = () => {

    const { data: events, isLoading } = useEvents();


    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <AiOutlineLoading3Quarters className="animate-spin h-20 w-20"/>
            </div>
        )
    } 

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

