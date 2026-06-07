
import { Button } from '@mui/material';

import api from '../util/api';

function SignUp(){
    const onHandleClick = async () => {
        const data = api.get('/findAll');
        console.log(data);
    };

    return (
        <>
            <Button onClick={onHandleClick}>Fetch</Button>
        </>
    );
}

export default SignUp;