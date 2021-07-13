import * as Auth from '../store/actions/auth';
import axios from 'axios';
import { ReactReduxContext } from 'react-redux'
import {Component, useContext} from 'react';

const apiUrl = "localhost:5000/api";
// console.log(token);


function API(){

const { store } = useContext(ReactReduxContext)
const token = "asdasdasdasdasdas";

const unauthorizedRequests = axios.create({
    baseURL: apiUrl,
    'Content-Type': 'application/json'
});

const authorizedRequests = axios.create({
    baseURL: apiUrl,
    headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    }
});

const login = (username,password,success) => {

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


const resetPassword = (username,password) => {

    axios.get(apiUrl+'/auth/reset-password',{
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


const AccountList = (success) => {

    authorizedRequests.get('/accounts/list')
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

const  AccountData = (id,success) => {

    authorizedRequests.get(`/accounts/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

const createAccount = (payload,success) => {
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


const clientList = (success) => {

    authorizedRequests.get('/clients/list')
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

const  clientData = (id,success) => {

    authorizedRequests.get(`/clients/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

const createClient = (payload,success) => {
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


const  leadsList = (success) => {

    authorizedRequests.get('/leads/list')
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}

const leadData = (id,success) => {

    authorizedRequests.get(`/leads/:${id}`,)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


const createLead = (payload,success) => {
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


const dealsList = (success) => {
    authorizedRequests.get('/deals/list',)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


const dealData = (id,success) => {

    authorizedRequests.get(`/leads/:${id}`,)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}



const createDeal = (payload,success) => {
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

const  updateDeal = (payload,success) => {
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


const  listTasks = (success) => {
        
    authorizedRequests.get('/tasks/list')
    .then((response)=>{
        success(response); // ongoing:[]   completed:[]
    })
    .catch((error)=>{
        console.log("Error", error);
    })
    
}


const  createTasks = (payload,success) => {
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

const  updateTaskStatus = (id,status,success) => {
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


const listUsers = (success) => {
    authorizedRequests.get('/users/list')
    .then((response)=>{
        success(response); 
    })
    .catch((error)=>{
        console.log("Error", error);
    })
}


const userData = (id,success) => {

    authorizedRequests.get(`/users/:${id}`)
        .then((response)=>{
            success(response);
        })
        .catch((error)=>{
            console.log("Error", error);
        })
}


const createUser = (payload,success) => {
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
}

export default API;