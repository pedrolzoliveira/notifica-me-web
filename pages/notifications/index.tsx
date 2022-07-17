import { useNotifications } from '../../hooks/notifications-hooks';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { Table, TBody, THead, Td, Th, Tr } from '../../components/table';

const Notifications = () => {

    const { data: notifications, isLoading } = useNotifications();

    if (isLoading) {
        return (
            <div className='w-full h-screen flex items-center justify-center'>
                <AiOutlineLoading3Quarters className='animate-spin h-20 w-20'/>
            </div>
        )
    } 

    return (
        <div className='p-4 w-full h-full space-y-4'>
            <h1 className='font-bold text-lg'>Notificações</h1>
            <Table>
                <THead className='sticky top-0 left-0'>
                    <tr>
                        <Th className='w-36'>Evento</Th>
                        <Th>Texto</Th>
                        <Th className='w-48'>Recebedor</Th>
                        <Th className='w-48'>Criado em</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        notifications?.map(notification => {
                            return (
                                <Tr key={notification.createdAt} >
                                    <Td className='font-semibold'>{notification.event.code}</Td>
                                    <Td>{notification.event.text}</Td>
                                    <Td>{notification.receiver.name}</Td>
                                    <Td>{new Date(notification.createdAt).toLocaleString()}</Td>
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
