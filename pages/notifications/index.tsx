import { useNotifications } from "../../hooks/notifications-hooks";

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { Table, TBody, THead, Td, Th, Tr } from "../../components/Table";

const Notifications = () => {

    const { data: notifications, isLoading } = useNotifications();

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
                        <Th className="w-36">Data</Th>
                        <Th className="w-36">Evento</Th>
                        <Th>Texto</Th>
                        <Th className="w-48">Recebedor</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        notifications?.map(notification => {
                            return (
                                <Tr key={notification.createdAt} >
                                    <Td>{notification.createdAt}</Td>
                                    <Td>{notification.event.code}</Td>
                                    <Td>{notification.event.text}</Td>
                                    <Td>{notification.receiver.number}</Td>
                                </Tr>
                            )
                        })
                    }
                </TBody>
            </Table>
            
        </div>
    )

    
}

export default Notifications;