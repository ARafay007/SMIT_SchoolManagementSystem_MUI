import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../../util/api';

export const addStudent = createAsyncThunk(
    'student/AddNewStudent', 
    async (studentForm) => {
        const { data: { data } } = await api.post('/student/addStudent', studentForm);

        console.log(data.insertedId);

        return {
            _id: data.insertedId,
            ...studentForm
        };
    });

const initialState = [];

export const studentSlice = createSlice({
    name: 'counter',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addStudent.fulfilled, (state, action) => {
            console.log(action);
            state.push(action.payload);
        })
    }
});

export default studentSlice.reducer