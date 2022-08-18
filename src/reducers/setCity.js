const initialState = {
    city: "Mathura",
    search : "MATHURA"
}

export const setCity = (state = initialState, action) => {
    switch(action.type){
        case "CITY" : return Object.assign({}, state, {city: action.payload.city});
        case "SEARCH" : return Object.assign({}, state, {search: action.payload.search});
        default: return action;
    }
}