import * as API from '../../API/api';


export const listOfTask = () => {
    return(dispatch) => {
        API.listTasks(res =>{
            dispatch({
                type:'LISTOFTASKS',
                tasks:res.data
            })
        })
    }
}