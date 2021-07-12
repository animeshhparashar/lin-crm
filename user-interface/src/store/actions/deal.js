import * as API from '../../apis/api';


export const listOfDeals = () => {
    return(dispatch) => {
        API.dealsList(res =>{
            dispatch({
                type:'LISTOFDEALS',
                deals:res.data
            })
        })
    }
}


export const getDeal = (id) => {
    return(dispatch)=>{
        API.dealData(id,res => {
            dispatch({
                type:'GETDEAL',
                payload:res.data
            })
        })
    }
}