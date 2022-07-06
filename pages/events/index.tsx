import { useEvents } from "../../hooks/events-hooks";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

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
            <table className='w-full shadow'>
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Código</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Texto</th>
                        <th className='w-48 p-3 text-sm font-semibold tracking-wide text-left'>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        events?.map(event => {
                            return (
                                <tr key={event.id} className="odd:bg-white even:bg-gray-50">
                                    <td className="p-3 text-sm text-gray-700">{event.code}</td>
                                    <td className="p-3 text-sm text-gray-700">{event.text}</td>
                                    <td className="p-3 text-sm text-gray-700">{event.createdAt}</td>
                                </tr>
                            )
                        })
                    }
                    
                    
                </tbody>
            </table>
        
        </div>
    )
}

export default Events;

