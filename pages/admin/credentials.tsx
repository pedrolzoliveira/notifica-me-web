import { useState } from 'react';
import { Button } from '../../components/Button';
import { Table, THead, TBody, Tr, Td, Th } from '../../components/table';
import { CreateCredentialModal } from '../../components/modals/create-credential-modal';

const Credential = () => {

    const [createModalOpen, setCreateModalOpen] = useState(false);

    return (
        <div className='p-4 w-full'>
            <div className='flex justify-between pb-4'>
                <h1 className='font-bold text-lg'>Minhas Credenciais</h1>
                <Button onClick={() => setCreateModalOpen(true)}>Adicionar</Button>
            </div>
            <Table>
                <THead>
                    <tr>
                        <Th className='w-36'>Evento</Th>
                        <Th className='w-36'>Nome</Th>
                        <Th className='w-44'>Chave</Th>
                        <Th className='w-48'>Criado em</Th>
                        <Th className='w-12'>Ações</Th>
                    </tr>
                </THead>
                <TBody>
                    
                </TBody>
            </Table>
            <CreateCredentialModal open={createModalOpen} onClose={() => setCreateModalOpen(false)}/>
        </div>
    )
}

export default Credential;
