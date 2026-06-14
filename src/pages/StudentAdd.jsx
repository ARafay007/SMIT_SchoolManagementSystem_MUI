import { 
    Typography, 
    Divider, 
    FormControl, 
    InputLabel, 
    OutlinedInput,
    Grid,
    Button,
} from "@mui/material";

const StudentAdd = () => {

    const onHandleSubmit = async (event) => {
        try{
            event.preventDefault();
        }
        catch(error){
            
        }
    };

    return (
        <>
            <Typography variant="h3">
                Add Student
            </Typography>
            <Divider />
            <form style={{ marginTop: "20px" }} onSubmit={onHandleSubmit}>
                <Grid container spacing={1}>
                    <Grid size={3}>
                            <FormControl sx={{width: '100%'}}>
                                <InputLabel htmlFor="my-input">Name</InputLabel>
                                <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                    </Grid>
                    <Grid size={3}>
                            <FormControl sx={{width: '100%'}}>
                                <InputLabel htmlFor="my-input">Email</InputLabel>
                                <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                    </Grid>
                    <Grid size={3}>
                            <FormControl sx={{width: '100%'}}>
                                <InputLabel htmlFor="my-input">Song</InputLabel>
                                <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                            </FormControl>
                    </Grid>
                    <Grid size={3}>
                            <FormControl sx={{width: '100%'}}>
                                <InputLabel htmlFor="my-input">Password</InputLabel>
                                <OutlinedInput id="my-input" aria-describedby="my-helper-text" type="password" />
                            </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{mt: "10px"}}>
                    <Grid size={3}>
                        <Button type="submit" variant="contained" sx={{width: '100%'}}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default StudentAdd;