import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useInfo, useSignUpMutation } from '../../hooks/auth-hooks';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const SignUp = () => {

    const {  mutateAsync: signUp, isLoading } = useSignUpMutation();
    const { data: info } = useInfo();
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await signUp({
                name,
                email,
                password
            });
            toast.success('Conta criada com sucesso! Redirecionando...');
            router.push('/');
        } catch(error) {
            toast.error('Algo deu errado!');
        }
    }

    if (info) {
        router.push('/');
    }
    
    return (
        <div className='absolute bg-black inset-0 bg-opacity-50 flex items-center justify-center'>
            <div className='bg-white rounded p-8 w-96'>
                <form
                className='space-y-4'
                onSubmit={handleSubmit}
                >
                    <h1 className='font-semibold text-gray-700 text-xl'>Criar conta</h1>
                    <div className='pt-4'>
                        <label htmlFor='email' className='text-gray-700 font-semibold'>Nome</label>
                        <Input
                        type='text'
                        value={name}
                        onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div className='pt-4'>
                        <label htmlFor='email' className='text-gray-700 font-semibold'>Email</label>
                        <Input
                        type='email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='text-gray-700 font-semibold'>Senha</label>
                        <Input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        type='password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor='password' className='text-gray-700 font-semibold'>Confirmar Senha</label>
                        <Input
                        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                        type='password'
                        value={passwordConfirmation}
                        onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </div>
                    <div className='space-x-4 w-full flex pt-4'>
                        <Button  className='w-full flex items-center justify-center' type='submit'>
                            {
                                isLoading ? 
                                <AiOutlineLoading3Quarters className='animate-spin'/>
                                :
                                'Criar conta'
                            }
                        </Button>
                    </div>
                    <div>
                        <Link href='/signin' className='text-sm'>Clique aqui para fazer o login.</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;