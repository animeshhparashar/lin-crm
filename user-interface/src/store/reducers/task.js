const InitialState = {
    onGoing:[],
    completed:[]
}



const TaskReducer = (state = InitialState, action) => {
    switch(action.type) {
        case 'LISTOFTASKS':
            return{
                ...state,
               onGoing: action.tasks.ongoing,
               completed: action.tasks.completed    
            }
        default:
            return state;
    }
}
export default TaskReducer;