const InitialState = {
    currentDeal:{},
    deals:[]
}



const leadReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'LISTOFDEALS':
            return{
                ...state,
               deals: action.deals    
            }
        case 'GETDEAL':
            return {
                ...state,
                currentDeal:action.payload
            }
        default:
            return state;
    }
}
export default leadReducer;