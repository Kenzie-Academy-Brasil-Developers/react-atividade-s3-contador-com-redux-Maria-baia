import { ADD_COUNT } from "./actionTypes"
import { SUB_COUNT } from "./actionTypes"

const reducerCounter = (state = 0, action) => {
    switch(action.type){
        case ADD_COUNT:
            return state + action.number;
        case SUB_COUNT:
            return state - action.number;
        default:
            return state;
    }
}

export default reducerCounter;