import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "auth/authOperations";

//components mui
import { ThemeProvider } from '@mui/material/styles'
import theme from "themes/themes";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



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
        <form onSubmit={handleSubmit} style={theme.Form}> 
            <ThemeProvider theme={theme.Input}>
            <TextField
                id="outlined-name"
                label='Name'
                type='text'
                name='name'
                value={name}
                onChange={handleChange}
                size='small'
            />
            <TextField
                id="outlined-name"
                label='Email'
                 type='text'
                name='email'
                value={email}
                onChange={handleChange}
                size='small'
            />
            <TextField
                id="outlined-name"
                label='Password'
                type='text'
                name='password'
                value={password}
                onChange={handleChange}
                size='small'
            />
            </ThemeProvider>
            
        <ThemeProvider theme={theme.Button}>
            <Button type="submit" variant="contained" >Sign in</Button>
        </ThemeProvider>
        </form> 
    )
};