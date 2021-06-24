const InitialState = {
    auth:true,
}

const authReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'LOGIN':
            console.log("Logging in");
            return{
                ...state,
                auth:true
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