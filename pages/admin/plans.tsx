import { useState } from 'react';
import { CreatePlanModal } from '../../components/modals/create-plans-modal';
import { EditPlanModal } from '../../components/modals/edit-plan-modal';
import { Button } from '../../components/Button';
import { Table, THead, TBody, Th, Td } from '../../components/table';
import { usePlans, useDestroyPlan } from '../../hooks/plans-hooks';
import { formataReal } from '../../utils/formataReal';
import { TrashButton } from '../../components/TrashButton';
import { AiOutlineEdit } from 'react-icons/ai';
import { Badge } from '../../components/Badge';

const Plans = () => {

    const { data: plans } = usePlans();

    const [createModalOpen, setCreateModalOpen] = useState(false);
    const [editPlan, setEditPlan] = useState<{
        id: string;
        name: string;
        description: string;
        price: number;
        events: string[];
    }>();

    return (
        <div className='p-4 w-full'>
            <div className='flex justify-between pb-4'>
                <h1 className='font-bold text-lg'>Meus Planos</h1>
                <Button onClick={() => setCreateModalOpen(true)}>Adicionar</Button>
            </div>
            <Table>
                <THead>
                    <tr>
                        <Th>Nome</Th>
                        <Th>Descrição</Th>
                        <Th>Eventos</Th>
                        <Th>Preço</Th>
                        <Th>Criado em</Th>
                        <Th>Ações</Th>
                    </tr>
                </THead>
                <TBody>
                    {
                        plans?.map(plan => {
                            return (
                                <tr key={plan.id}>
                                    <Td>{plan.name}</Td>
                                    <Td>{plan.description}</Td>
                                    <Td className='space-x-2'>{plan.events.map(event => <Badge>{event.code}</Badge>)}</Td>
                                    <Td>{formataReal(plan.price)}</Td>
                                    <Td>{new Date(plan.createdAt).toLocaleString()}</Td>
                                    <Td className='flex justify-center space-x-4'>
                                        <button className='p-2 rounded hover:bg-blue-100' onClick={
                                            ()=> setEditPlan({
                                                ...plan,
                                                events: plan.events.map(event => event.code)
                                            })
                                        }>
                                            <AiOutlineEdit/>
                                        </button>
                                        <TrashButton useMutation={() => useDestroyPlan(plan.id)}/>
                                    </Td>
                                </tr>
                            )
                        })
                    }
                </TBody>
            </Table>
            <EditPlanModal plan={editPlan} onClose={() => setEditPlan(undefined)}/>
            <CreatePlanModal open={createModalOpen} onClose={() => setCreateModalOpen(false)}/>
        </div>
    )
}

export default Plans;

