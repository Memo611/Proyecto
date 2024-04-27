import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const getUsers = createAsyncThunk("users/getUsers", 
    async ({ rejectedWithValue }) => {
        try{
            const resp = axios.get('http://187.189.158.186:7777/Usuario')
            return resp.data;
        }
        catch (error)
        {
            return rejectedWithValue(`Error al obtener usuarios: ${error.message}`);
        }
    }
);