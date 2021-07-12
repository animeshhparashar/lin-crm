const InitialState = {
    username:"",
    token:"",
    auth:false,
}

const authReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            console.log("Logging in");
            return{
                ...state,
                auth:true,
                username:action.username,
                token:action.token    
            }
        case 'LOGOUT':
            console.log("Logged out");
            return {
                ...InitialState
            }
        default:
            return state;
    }
}
export default authReducer;