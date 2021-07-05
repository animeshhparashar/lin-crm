const InitialState = {
    currentLead:{},
    leads:[]
}



const dealReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'LISTOFLEADS':
            return{
                ...state,
               leads: action.leads    
            }
        case 'GETLEAD':
            return {
                ...state,
                currentLead:action.payload
            }
        default:
            return state;
    }
}
export default dealReducer;