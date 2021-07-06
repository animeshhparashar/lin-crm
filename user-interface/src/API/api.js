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


export const AccountList = (success) => {

    axios.get(`${url}/api/accounts/list`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const AccountData = (id,success) => {

    axios.get(`${url}/api/accounts/:${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const createAccount = (payload,success) => {
    axios.post(`${url}/api/accounts/new`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } ,
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

    axios.get(`${url}/api/clients/list`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const clientData = (id,success) => {

    axios.get(`${url}/api/clients/:${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const createClient = (payload,success) => {
    axios.post(`${url}/api/clients/new`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } ,
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

    axios.get(`${url}/api/leads/list`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

export const leadData = (id,success) => {

    axios.get(`${url}/api/leads/:${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const createLead = (payload,success) => {
    axios.post(`${url}/api/leads/new`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } ,
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
    axios.get(`${url}/api/deals/list`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const dealData = (id,success) => {

    axios.get(`${url}/api/leads/:${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}



export const createDeal = (payload,success) => {
    axios.post(`${url}/api/leads/new`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } ,
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
    axios.post(`${url}/api/leads/update`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } ,
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
        
    axios.get(`${url}/api/tasks/list`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
    .then((response)=>{
        success(response); // ongoing:[]   completed:[]
    })
    .catch((error)=>{
        console.log("Error", error);
    })
    
}


export const createTasks = (payload,success) => {
    axios.post(`${url}/api/tasks/new`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } ,
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
    axios.post(`${url}/api/leads/update`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } ,
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
    axios.get(`${url}/api/users/list`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
    .then((response)=>{
        success(response); 
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


export const userData = (id,success) => {

    axios.get(`${url}/api/users/:${id}`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } 
    })
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


export const createUser = (payload,success) => {
    axios.post(`${url}/api/users/new`,{
        headers:{
            'Authorization': `Bearer ${token}`
        } ,
        payload:payload
    })
    .then((response)=>{
        success(response);
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}