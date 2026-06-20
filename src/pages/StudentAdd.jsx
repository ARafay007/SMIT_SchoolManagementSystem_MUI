import {
    Typography,
    Divider,
    FormControl,
    InputLabel,
    OutlinedInput,
    Grid,
    Button,
    Select,
    MenuItem,
} from "@mui/material";

const StudentAdd = () => {

    const classList = ["Nursery", "KG", "1", "2", "3", "4"];

    const onHandleSubmit = async () => {
        // try {
        //     event.preventDefault();
        // }
        // catch (error) {

        // }
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
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">Name</InputLabel>
                            <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">Email</InputLabel>
                            <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">DOB</InputLabel>
                            <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">Age</InputLabel>
                            <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Class</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                // value={age}
                                label="Age"
                                // onChange={handleChange}
                            >
                                {
                                    classList.map((el) => 
                                        <MenuItem value={el} key={el}>{el}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">Section</InputLabel>
                            <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">City</InputLabel>
                            <OutlinedInput id="my-input" aria-describedby="my-helper-text" />
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{ mt: "10px" }}>
                    <Grid size={3}>
                        <Button type="submit" variant="contained" sx={{ width: '100%' }}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};

export default StudentAdd;