import * as API from '../../apis/api';


export const listOfleads = () => {
    return(dispatch) => {
        API.leadsList(res =>{
            dispatch({
                type:'LISTOFLEADS',
                leads:res.data
            })
        })
    }
}


export const getlead = (id) => {
    return(dispatch)=>{
        API.leadData(id,res => {
            dispatch({
                type:'GETLEAD',
                payload:res.data
            })
        })
    }
}