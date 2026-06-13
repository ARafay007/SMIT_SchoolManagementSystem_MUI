
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Container, Box, TextField, Button, FormLabel } from '@mui/material';
import api from '../util/api';


function Login() {
    // const [ email, setEmail ] = useState('');
    // const [ password, setPassword ] = useState('');
    const [loginForm, setLoginForm] = useState({
        name: '',
        password: '',
    });

    const navigate = useNavigate();

    const onHandleInput = (event, stateName) => {
        // if(stateName === 'email')
        //     setEmail(event.target.value);
        // else if(stateName === 'password')
        //     setPassword(event.target.value);

        setLoginForm((prevState) => ({ ...prevState, [stateName]: event.target.value }))
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();

        if(!loginForm.name || !loginForm.password){
            alert('Please fill all the fields');
        }
        else{
            // const resp = await fetch('http://localhost:8000/signin', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'Application/json',
            //         'Authorization': `Bearer ${localStorage.getItem('access_token')}`
            //     },
            //     body: JSON.stringify(loginForm),
            // });

            // const data = await resp.json();

            const {data} = await api.post('/student/signin', loginForm);

            if(data.token){
                localStorage.setItem('access_token', data.token);
                console.log('asdasd');
                navigate('/');
            }
        }

    };

    return (
        <Container
            maxWidth="xxl"
            sx={{
                height: '100dvh',
                // width: '100vw',
                backgroundColor: 'rgb(37,37,37)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <form onSubmit={onFormSubmit}>
                <Box
                    sx={{
                        width: '400px',
                        height: 'auto',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        padding: '5px',
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <FormLabel
                        sx={{
                            fontSize: '30px',
                            textAlign: 'center',
                        }}
                    >
                        Login
                    </FormLabel>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        sx={{
                            mb: '20px',
                        }}
                        onChange={(event) => { onHandleInput(event, 'name') }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Password"
                        variant="outlined"
                        type='password'
                        sx={{
                            mb: '20px',
                        }}
                        onChange={(event) => { onHandleInput(event, 'password') }}
                    />
                    <Button variant="contained" type='submit'>Login</Button>
                </Box>
            </form>
        </Container>
    );
}

export default Login;