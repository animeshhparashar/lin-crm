const InitialState = {
    currentClient:{},
    clients:[]
}



const clientReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'LISTOFCLIENT':
            return{
                ...state,
               clients: action.clients    
            }
        case 'GETCLIENT':
            return {
                ...state,
                currentClient:action.payload
            }
        default:
            return state;
    }
}
export default clientReducer;