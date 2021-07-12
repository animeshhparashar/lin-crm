import * as API from '../../apis/api';


export const listOfclients = () => dispatch => {
    API.clientList(res => {
        dispatch({
            type: 'LISTOFCLIENT',
            clients: res.data
        })
    })
}


export const getclient = (id) => dispatch => {
    API.clientData(id, res => {
        dispatch({
            type: 'GETCLIENT',
            payload: res.data
        })
    })
}
