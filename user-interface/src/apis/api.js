import * as Auth from '../store/actions/auth';
const axios = require('axios');

const apiUrl = "localhost:5000/api";

const unauthorizedRequests = axios.create({
    baseURL: apiUrl,
    'Content-Type': 'application/json'
});

// 'Authorization': `Bearer ${token}`

const authorizedRequests = axios.create({
    baseURL: apiUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});


export const login = (username,password,success) => {

    unauthorizedRequests().post('/auth/login',{
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

    unauthorizedRequests.get('/auth/reset-password',{
        username:username,
        password:password
    })
        .then((response)=>{
            console.log("This is response :::", response);
            Auth.login(username,response.token);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const AccountList = (success) => {

    authorizedRequests.get('/accounts/list')
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const AccountData = (id,success) => {

    authorizedRequests.get(`/accounts/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const createAccount = (payload,success) => {
    authorizedRequests.post('/accounts/new',{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const clientList = (success) => {

    authorizedRequests.get('/clients/list')
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const clientData = (id,success) => {

    authorizedRequests.get(`/clients/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const createClient = (payload,success) => {
    authorizedRequests.post('/clients/new',{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const leadsList = (success) => {

    authorizedRequests.get('/leads/list')
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const leadData = (id,success) => {

    authorizedRequests.get(`/leads/:${id}`,)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const createLead = (payload,success) => {
    authorizedRequests.post('/leads/new',{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const dealsList = (success) => {
    authorizedRequests.get('/deals/list',)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const dealData = (id,success) => {

    authorizedRequests.get(`/leads/:${id}`,)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}



export const createDeal = (payload,success) => {
    authorizedRequests.post('/leads/new',{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}

export const updateDeal = (payload,success) => {
    authorizedRequests.post('/leads/update',{

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
        
    authorizedRequests.get('/tasks/list')
    .then((response)=>{
        success(response); // ongoing:[]   completed:[]
    })
    .catch((error)=>{
        console.log("Error", error);
    })
    
}


export const createTasks = (payload,success) => {
    authorizedRequests.post('/tasks/new',{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}

export const updateTaskStatus = (id,status,success) => {
    authorizedRequests.post('/leads/update',{
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
    authorizedRequests.get('/users/list')
    .then((response)=>{
        success(response); 
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const userData = (id,success) => {

    authorizedRequests.get(`/users/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const createUser = (payload,success) => {
    authorizedRequests.post('/users/new',{
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}