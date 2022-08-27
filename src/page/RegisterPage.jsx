import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "auth/authOperations";

export default function RegisterPage() {
    const dispatch = useDispatch();
    const [ name, setName ] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = (e) => {
        const { name } = e.target;
        const { value } = e.target;
    //    console.log(value)
    //     console.log(name)
        switch (name) {
            case 'name': setName(value);
                break;
            case 'email': setEmail(value);
                break;
            case 'password': setPassword(value);
                break;
            default: return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log({ name: name, email: email, password: password })
        dispatch(register({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name"
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
            ></input>
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
}