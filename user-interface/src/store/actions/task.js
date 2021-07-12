import * as API from '../../apis/api';


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