let userState = {
    allUsers: [],
}

const rootReducer = (state = userState, action)=>{
    switch (action.type) {
        case "GET_USERS":
            return {...state, allUsers: action.payload}
        
        case "DELETE_USER":
            return {...state, allUsers: allUsers.map((user) =>{
                user.id !== action.payload
            })}
        
        case "GET_USER_NAME":
            return {...state, allUsers: action.payload}
        default:
            return state;
    }
};

export default rootReducer;