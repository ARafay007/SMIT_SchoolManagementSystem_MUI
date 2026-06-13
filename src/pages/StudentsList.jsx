

import { useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../util/api";

const StudentsList = () => {

    const navigate = useNavigate();

    const fetchData = async () => {
        try{
            const { data } = await api.get('/student/findAll');
    
            console.log(data);
        }
        catch(error){
            const {data} = error.response;

            if(!data.access){
                navigate('/login');
            }
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <h1>Students List</h1>
        </>
    );
};

export default StudentsList;