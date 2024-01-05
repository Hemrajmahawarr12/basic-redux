const Reducer = (state = 0, action) =>{
    if(action.type === 'Deposit'){
        // console.log(action)
        return state + action.payload
    }
    else if(action.type === 'WithDraw'){
        return state - action.payload
    }
     else{
        return state;
    }
    
}

  

export default Reducer;

