import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "auth/authOperations";

export function LoginPage() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name } = e.target;
        const { value } = e.target;
    //    console.log(value)
    //     console.log(name)
        switch (name) {
            case 'email': setEmail(value);
                break;
            case 'password': setPassword(value);
                break;
            default: return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(logIn({ email, password }));
        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input id="email"
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
            ></input>
            <label htmlFor="password">Password</label>
            <input id="password"
            type='text'
            name='password'
            value={password}
            onChange={handleChange}
            ></input>
            <button type="submit">Sign in</button>
        </form>
    )
};