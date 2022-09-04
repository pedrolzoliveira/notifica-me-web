import { FormEvent, useState } from 'react';
import { toast } from 'react-toastify';
import { useSignInMutation } from '../../hooks/auth-hooks';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
export const Login = () => {

    const {  mutateAsync: signIn, isLoading } = useSignInMutation();

    const [email, setEmail] = useState('alvesp2001@gmail.com');
    const [password, setPassword] = useState('Password123!');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const customer = await signIn({
            email,
            password
        });
        toast( JSON.stringify(customer) );
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <Input value={email} onChange={ e => setEmail(e.target.value) }/>
                <label htmlFor="password">Senha</label>
                <Input
                value={password}
                onChange={ e => setPassword(e.target.value) }
                />
                <Button type="submit">Entrar</Button>
            </form>
        </div>
    )
}

export default Login;