import { BsWhatsapp } from 'react-icons/bs';
import { CreateReceiverModal } from '../../components/modals/create-receiver-modal/create-receiver-modal';
import { EditReceiverModal } from '../../components/modals/edit-receiver-modal';
import { TrashButton } from '../../components/TrashButton';
import { AiOutlineLoading3Quarters, AiOutlineEdit } from 'react-icons/ai';
import { useReceivers, useDestroyReceiver } from '../../hooks/receivers-hooks';
import { Table, THead, TBody, Td, Th, Tr } from '../../components/Table';
import { Button } from '../../components/Button';
import { useState } from 'react';
import { Badge } from '../../components/Badge';
import { formataCelular } from '../../utils/formata-celular';
import { useInfo } from '../../hooks/auth-hooks';
import { useRouter } from 'next/router';




const Receivers = () => {

    const router = useRouter();
    const { data: receivers, isLoading } = useReceivers();
    const { data: info, isLoading: infoLoading } = useInfo();
    const [editReceiver, setEditReceiver] = useState<{
        id: string;
        name: string;
        number: string;
        events: {
            id: string;
            code: string;
            receiverId: string;
        }[];
        messenger: "whatsapp" | "telegram" | "sms"
    }>();
    const [modalOpen, setModalOpen] = useState(false);


    if (isLoading) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <AiOutlineLoading3Quarters className='animate-spin h-20 w-20'/>
            </div>
        )
    }

    if (!info?.customer && !infoLoading) {
        router.push('/signin')
    }

    return (
        <div className="p-4 w-full">
            <div className='flex justify-between mb-4'>
                <h1 className='font-bold text-lg'>Recebedores</h1>
                <Button onClick={() => { setModalOpen(true) }}>Adicionar</Button>
            </div>
            <div className='overflow-auto'>
                <Table className='block max-h-[90vh] overflow-scroll'>
                    <THead>
                        <tr>
                            <Th className='w-36'>Nome</Th>
                            <Th className='w-36'>Contato</Th>
                            <Th className='w-full'>Eventos registrados</Th>
                            <Th className='w-12'>Ações</Th>
                        </tr>
                    </THead>
                    <TBody>
                        {
                            receivers?.map(receiver => {
                                return (
                                    <Tr key={receiver.id} >
                                        <Td>{receiver.name}</Td>
                                        <Td className='flex items-center space-x-2'>
                                            <BsWhatsapp/>
                                            <span>
                                                {formataCelular(receiver.number)}
                                            </span>
                                        </Td>
                                        <td className='space-x-2'>
                                            {
                                                receiver.events.map(event => {
                                                    return (
                                                        <Badge key={event.id}>{event.code}</Badge>
                                                    )
                                                })
                                            }
                                        </td>
                                        <Td className='flex justify-center space-x-4'>
                                            <button className='p-2 rounded hover:bg-blue-100' onClick={() => setEditReceiver(receiver)}>
                                                <AiOutlineEdit/>
                                            </button>
                                            <TrashButton useMutation={() => useDestroyReceiver(receiver.id)}/>
                                        </Td>
                                    </Tr>
                                )
                            })
                        }                    
                    </TBody>
                </Table>
            </div>
            <CreateReceiverModal open={modalOpen} onClose={() => { setModalOpen(false) }}/>
            <EditReceiverModal receiver={editReceiver} onClose={() => setEditReceiver(undefined)}/>
        </div>
    )
}


export default Receivers;
