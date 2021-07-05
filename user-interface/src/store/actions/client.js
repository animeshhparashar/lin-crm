import * as API from '../../API/api';


export const listOfclients = () => {
    return(dispatch) => {
        API.clientList(res =>{
            dispatch({
                type:'LISTOFCLIENT',
                clients:res.data
            })
        })
    }
}


export const getclient = (id) => {
    return(dispatch)=>{
        API.clientData(id,res => {
            dispatch({
                type:'GETCLIENT',
                payload:res.data
            })
        })
    }
}