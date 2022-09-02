import { FormEvent, useState } from 'react';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" value={email}
                onChange={
                    e => setEmail(e.target.value)
                }/>
                <label htmlFor="password">Senha</label>
                <input type="password" value={password}
                onChange={
                    e => setPassword(e.target.value)
                }
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    )
}

export default Login;