import * as API from '../../API/api';


export const listOfusers = () => {
    return(dispatch) => {
        API.listUsers(res =>{
            dispatch({
                type:'LISTOFUSERS',
                users:res.data
            })
        })
    }
}


export const getuser = (id) => {
    return(dispatch)=>{
        API.userData(id,res => {
            dispatch({
                type:'GETUSER',
                payload:res.data
            })
        })
    }
}