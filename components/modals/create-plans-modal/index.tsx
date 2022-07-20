import { FormEvent, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useCreatePlan } from '../../../hooks/plans-hooks';
import { Button } from '../../Button';
import CurrencyInput, { CurrencyInputProps, formatValue } from 'react-currency-input-field';

type CreatePlanModalProps = {
    open: boolean;
    onClose: Function;
}

export const CreatePlanModal = ({ open, onClose }: CreatePlanModalProps) => {

    const NAME_DEFAULT_VALUE = '';
    const DESCRIPTION_DEFAULT_VALUE = '';
    const PRICE_DEFAULT_VALUE = 0;
    
    const { mutateAsync: add, isLoading } = useCreatePlan();
    
    const [name, setName] = useState(NAME_DEFAULT_VALUE);
    const [description, setDescription] = useState(DESCRIPTION_DEFAULT_VALUE);
    const [price, setPrice] = useState<number>();
    
    
    const handleClose = () => {
        setName(NAME_DEFAULT_VALUE);
        setDescription(DESCRIPTION_DEFAULT_VALUE);
        setPrice(PRICE_DEFAULT_VALUE);
        onClose();
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading) return;

        await add({
           name,
           description,
           price: price as number
        });

        handleClose();
    }
    
    if (!open) return null;
    
    return (
        <div className='absolute bg-black inset-0 bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white rounded p-8 w-96'>
                <form className='space-y-4' onSubmit={handleSubmit}>
                    <h1 className='font-semibold text-gray-700 text-xl'>Adicionar Plano</h1>
                    <div className='pt-4'>
                        <label htmlFor='name' className='text-gray-700 font-semibold'>Nome</label>
                        <input type='text' value={name} onChange={e => setName(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 '/>
                    </div>
                    <div className='pt-4'>
                        <label htmlFor='name' className='text-gray-700 font-semibold'>Descrição</label>
                        <textarea  value={description} onChange={e => setDescription(e.target.value)} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                    </div>
                    <div>
                        <label htmlFor='number' className='text-gray-700 font-semibold'>Preço</label>
                        <CurrencyInput onValueChange={(_, __, values) => {
                            console.log(values);
                            
                            setPrice(Number(values?.float));
                        }} prefix='R$ ' allowDecimals allowNegativeValue={false} placeholder='R$' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'/>
                    </div>
                    <div className='space-x-4 w-full flex pt-4'>
                        <Button className='w-full' onClick={handleClose}>Cancelar</Button>
                        <Button  className='w-full flex items-center justify-center' type='submit'>
                            {
                                isLoading ? 
                                <AiOutlineLoading3Quarters className='animate-spin'/>
                                :
                                'Adicionar'
                            }
                            
                        </Button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}