import { ADD, DELETE } from '../constants/todos'

// Call the function ( e.g. add, del ) to trigger the 'action' objects.
// The function returns one 'action' object.
export const add = (data) => {
    return {
        data,
        type: ADD
    }
}

export const del = (id) => {
    return {
        id,
        type: DELETE
    }
}
