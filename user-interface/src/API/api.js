import * as Auth from '../store/actions/auth';
const axios = require('axios');
const url = "";


export const login = (username,password,success) => {

    axios.post(`${url}/auth/login`,{
        username:username,
        password:password
    })  .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const resetPassword = (username,password) => {

    axios.get(url+'/auth/login',{
        username:username,
        password:password
    })
        .then((response)=>{
            console.log("This is response :::", response);
            Auth.login(username,response.Token);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const AccountList = (authheader,success) => {

    axios.get(`${url}/api/accounts/list`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const AccountData = (authheader,id,success) => {

    axios.get(`${url}/api/accounts/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const createAccount = (authheader,payload,success) => {
    axios.post(`${url}/api/accounts/new`,{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const clientList = (authheader,success) => {

    axios.get(`${url}/api/clients/list`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const clientData = (authheader,id,success) => {

    axios.get(`${url}/api/clients/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const createClient = (authheader,payload,success) => {
    axios.post(`${url}/api/clients/new`,{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const leadsList = (authheader,success) => {

    axios.get(`${url}/api/leads/list`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const leadData = (authheader,id,success) => {

    axios.get(`${url}/api/leads/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const createLead = (authheader,payload,success) => {
    axios.post(`${url}/api/leads/new`,{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const dealsList = (authheader,success) => {
    axios.get(`${url}/api/deals/list`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const dealData = (authheader,id,success) => {

    axios.get(`${url}/api/leads/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}



export const createDeal = (authheader,payload,success) => {
    axios.post(`${url}/api/leads/new`,{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}

export const updateDeal = (authheader,payload,success) => {
    axios.post(`${url}/api/leads/update`,{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const listTasks = (success) => {
        
    axios.get(`${url}/api/tasks/list`)
    .then((response)=>{
        success(response); // ongoing:[]   completed:[]
    })
    .catch((error)=>{
        console.log("Error", error);
    })
    
}


export const createTasks = (authheader,payload,success) => {
    axios.post(`${url}/api/tasks/new`,{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}

export const updateTaskStatus = (authheader,id,status,success) => {
    axios.post(`${url}/api/leads/update`,{
        id:id,
        status:status
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const listUsers = (success) => {
    axios.get(`${url}/api/users/list`)
    .then((response)=>{
        success(response); 
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const userData = (authheader,id,success) => {

    axios.get(`${url}/api/users/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const createUser = (authheader,payload,success) => {
    axios.post(`${url}/api/users/new`,{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}