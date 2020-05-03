const initialstate={
    data:[]
}

const Reducer = (state=initialstate, action) => {
    switch(action.type){
        case 'FORM_DATA': return{
            ...state,
            data: action.data
        }
        default: return state;
    }
}

export default Reducer;