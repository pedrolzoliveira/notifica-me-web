import { useNotifications } from "../../hooks/notifications-hooks";

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
            <table className='w-full shadow'>
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Data</th>
                        <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Evento</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Texto</th>
                        <th className='w-48 p-3 text-sm font-semibold tracking-wide text-left'>Recebedor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notifications?.map(notification => {
                            return (
                                <tr key={notification.createdAt} className="odd:bg-white even:bg-gray-50">
                                    <td className="p-3 text-sm text-gray-700">{notification.createdAt}</td>
                                    <td className="p-3 text-sm text-gray-700">{notification.event.code}</td>
                                    <td className="p-3 text-sm text-gray-700">{notification.event.text}</td>
                                    <td className="p-3 text-sm text-gray-700">{notification.receiver.number}</td>
                                </tr>
                            )
                        })
                    }
                    
                    
                </tbody>
            </table>
            
        </div>
    )
}

export default Notifications;