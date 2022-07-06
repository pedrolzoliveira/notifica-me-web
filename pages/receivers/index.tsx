import { BsWhatsapp } from 'react-icons/bs';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { useReceivers } from '../../hooks/receivers-hooks';

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
            <table className='w-full shadow'>
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                        <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Nome</th>
                        <th className='w-36 p-3 text-sm font-semibold tracking-wide text-left'>Contato</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        receivers?.map(receiver => {
                            return (
                                <tr key={receiver.id} className="odd:bg-white even:bg-gray-50">
                                    <td className="p-3 text-sm text-gray-700">{receiver.messenger}</td>
                                    <td className="p-3 text-sm text-gray-700">{receiver.number}</td>
                                </tr>
                            )
                        })
                    }
                    
                    
                </tbody>
            </table>
        
        </div>
    )
}


export default Receivers;