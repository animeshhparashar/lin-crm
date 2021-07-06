const InitialState = {
    currentUser:{},
    users:[]
}



const userReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'LISTOFUSERS':
            return{
                ...state,
               users: action.users    
            }
        case 'GETUSER':
            return {
                ...state,
                currentUser:action.payload
            }
        default:
            return state;
    }
}
export default userReducer;