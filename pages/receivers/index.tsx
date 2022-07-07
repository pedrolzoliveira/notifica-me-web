import { BsWhatsapp } from 'react-icons/bs';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { useReceivers } from '../../hooks/receivers-hooks';
import { Table, THead, TBody, Td, Th, Tr } from '../../components/Table';

const Receivers = () => {

    const { data: receivers, isLoading } = useReceivers();

    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <AiOutlineLoading3Quarters className='animate-spin h-20 w-20'/>
            </div>
        )
    }

    return (
        <div className="p-4 w-full">
            <Table >
                <THead>
                    <tr>
                        <Th className='w-36'>Nome</Th>
                        <Th className='w-36'>Contato</Th>
                        <Th className='w-36'>Eventos Registrados</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        receivers?.map(receiver => {
                            return (
                                <Tr key={receiver.id} >
                                    <Td>{receiver.messenger}</Td>
                                    <Td>{receiver.number}</Td>
                                    <Td>{receiver.registeredEvents.map(registeredEvent => registeredEvent.eventCode)}</Td>
                                </Tr>
                            )
                        })
                    }
                    
                    
                </TBody>
            </Table>
        </div>
    )
}


export default Receivers;