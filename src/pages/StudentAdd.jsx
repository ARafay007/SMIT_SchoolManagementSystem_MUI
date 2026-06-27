import { useState } from "react";
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
    Snackbar,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/slices/student"; 

const StudentAdd = () => {

    const classList = ["Nursery", "KG", "1", "2", "3", "4"];
    const sectionList = ["A", "B", "C", "D"];
    const cityList = ["Hyderabad", "Karachi", "Lahore", "Islamabad"];

    const [snackBarOpen, setSnackBarOpen] = useState(false);
    const [snackBarMsg, setSnackBarMsg] = useState("");
    const [studentForm, setStudentForm] = useState({
        name: "",
        grade: "",
        section: "",
        city: "",
        email: "",
        dob: "",
    });

    const dispatch = useDispatch();

    const onHandleInput = (event, fieldName) => {
        setStudentForm((prevState) => ({...prevState, [fieldName]: event.target.value}));
    }; 

    const onHandleCloseSnackBar = () => {
        setSnackBarOpen(false);
    };

    const onHandleSubmit = async (event) => {
        event.preventDefault();
        try {
            dispatch(addStudent(studentForm));
        }
        catch (error) {
            setSnackBarMsg(error.message);
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
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">Name</InputLabel>
                            <OutlinedInput 
                                id="my-input" 
                                aria-describedby="my-helper-text" 
                                value={studentForm.name}
                                onChange={(event) => {onHandleInput(event, "name")}}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">Email</InputLabel>
                            <OutlinedInput 
                                id="my-input" 
                                aria-describedby="my-helper-text" 
                                onChange={(event) => {onHandleInput(event, "email")}} 
                                value={studentForm.email}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl sx={{ width: '100%' }}>
                            <InputLabel htmlFor="my-input">DOB</InputLabel>
                            <OutlinedInput 
                                id="my-input" 
                                type="date"
                                aria-describedby="my-helper-text" 
                                onChange={(event) => {onHandleInput(event, "dob")}} 
                                value={studentForm.dob}
                            />
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Class</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={studentForm.grade}
                                label="Class"
                                onChange={(event) => {onHandleInput(event, "grade")}}
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
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Section</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={studentForm.section}
                                label="Age"
                                onChange={(event) => {onHandleInput(event, "section")}}
                            >
                                {
                                    sectionList.map((el) => 
                                        <MenuItem value={el} key={el}>{el}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid size={3}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">City</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={studentForm.city}
                                label="City"
                                onChange={(event) => {onHandleInput(event, "city")}}
                            >
                                {
                                    cityList.map((el) => 
                                        <MenuItem value={el} key={el}>{el}</MenuItem>
                                    )
                                }
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={1} sx={{ mt: "10px" }}>
                    <Grid size={3}>
                        <Button type="submit" variant="contained" sx={{ width: '100%' }}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
            <Snackbar
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
                open={snackBarOpen}
                onClose={onHandleCloseSnackBar}
                message={snackBarMsg}
                key={"topCenter"}
            />
        </>
    );
};

export default StudentAdd;