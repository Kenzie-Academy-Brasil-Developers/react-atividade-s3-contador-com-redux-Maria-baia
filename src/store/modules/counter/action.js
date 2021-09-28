import { ADD_COUNT, SUB_COUNT } from "./actionTypes";

export const addCount = (number) => ({
    type: ADD_COUNT,
    number
})

export const subCount = (number) => ({
    type: SUB_COUNT,
    number
})