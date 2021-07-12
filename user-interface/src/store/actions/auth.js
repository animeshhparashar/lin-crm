import * as API from '../../apis/api';


export const login = (username,password) => {
    return(dispatch) => {
     
        API.login(username,password, res => {
            console.log("Result", res);
            dispatch({
                type:'LOGIN',
                username:username,
                token:res.token
            })
        })
    }
 }

export const logout = () => {
    return {
        type:'LOGOUT'
    }
}
