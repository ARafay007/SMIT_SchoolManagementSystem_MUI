
import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { Container, Box, TextField, Button, FormLabel, Snackbar } from '@mui/material';
import api from '../util/api';

function SignUp(){    
    const [signUpForm, setSignUpForm] = useState({
        name: '',
        password: '',
        confirmPassword: '',
    });
    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState("");

    const navigate = useNavigate();

    const onHandleInput = (event, fieldName) => {
        setSignUpForm((prevState) => (
            {
                ...prevState, 
                [fieldName]: event.target.value
            }
        ));
    };

    const onHandleCloseSnackBar = () => {
        setSnackBarOpen(false);
    };

    const onHandleSubmit = async (event) => {
        event.preventDefault();

        if(signUpForm.password !== signUpForm.confirmPassword){
            setSnackBarMsg("Password and Confirm password are not matched!");
            setSnackBarOpen(true);
        }
        else{
            const {name, password} = signUpForm;
            const data = await api.post('/student/signUp', { name, password });
            
            console.log(data);

            if(data.status == "200"){
                navigate("/login");
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
            <form onSubmit={onHandleSubmit}>
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
                        SignUp
                    </FormLabel>
                    <TextField
                        id="outlined-basic"
                        label="Name"
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
                    <TextField
                        id="outlined-basic"
                        label="Confirm Password"
                        variant="outlined"
                        type='password'
                        sx={{
                            mb: '20px',
                        }}
                        onChange={(event) => { onHandleInput(event, 'confirmPassword') }}
                    />
                    <Link to="/signup">
                        <FormLabel sx={{ textDecoration: "none", color: "purple" }}>
                            Already have an account?
                        </FormLabel>
                    </Link>
                    <Button variant="contained" type='submit'>SignUp</Button>
                </Box>
            </form>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={snackBarOpen}
                onClose={onHandleCloseSnackBar}
                message={snackBarMsg}
                key={"topCenter"}
            />
        </Container>
    );
}

export default SignUp;