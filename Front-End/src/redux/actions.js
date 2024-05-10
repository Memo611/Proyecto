import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("users/getUsers",
    async () => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Usuario');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const getUserUnique = createAsyncThunk("users/getUserUnique",
    async (id) => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Usuario/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const deleteUser = createAsyncThunk("users/deleteUser",
    async (id) => {
        try
        {      
            const resp = await axios.delete('http://187.189.158.186:7777/Usuario/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const addUser = createAsyncThunk("users/addUser",
    async (data) => {
        try
        {      
            const resp = await axios.post('http://187.189.158.186:7777/Usuario', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const editUSer = createAsyncThunk("users/editUSer",
    async (data) => {
        try
        {      
            const resp = await axios.put('http://187.189.158.186:7777/Usuario/'+data.id, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const getRoles = createAsyncThunk("users/getRoles",
    async () => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Roles');

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const getRoleUnique = createAsyncThunk("users/getRoleUnique",
    async (id) => {
        try
        {      
            const resp = await axios.get('http://187.189.158.186:7777/Role/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const deleteRole = createAsyncThunk("users/deleteRole",
    async (id) => {
        try
        {      
            const resp = await axios.delete('http://187.189.158.186:7777/Role/'+id);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const addRole = createAsyncThunk("users/addRole",
    async (data) => {
        try
        {      
            const resp = await axios.post('http://187.189.158.186:7777/Role', data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);

export const editRole = createAsyncThunk("users/editRole",
    async (data) => {
        try
        {      
            const resp = await axios.put('http://187.189.158.186:7777/Role/'+data.id, data);

            return resp.data;
        } 
        catch (error) 
        {
            return null;
        }
    }
);