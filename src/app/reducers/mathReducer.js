const mathReducer = (state = {
    result:1,
    lastValues:[]
},action) => {
    switch (action.type){
        case "ADD":
            //not an immutable way ==>> state.result += action.payload;
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues,action.payload]
            }
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result:state.result-action.payload,
                lastValues: [...state.lastValues,action.payload]
            }
            break;
    }
    return state;
};

export default mathReducer;
