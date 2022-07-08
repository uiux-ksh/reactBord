
function reducers(currenState:any,action:any) {
    if(currenState === undefined){
        return{
            number:5,
            color:"red",
        }
    };
    const newState = {...currenState};

    if(action.type === 'PLUS'){
        newState.color="blue";
    }
    return newState;
}

export  default reducers;