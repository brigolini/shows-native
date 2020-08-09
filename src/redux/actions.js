export const CREATE_LIST = "CREATE_LIST";
export const SET_ITEM_SELECTED = "SET_ITEM_SELECTED";
export const ADD_ITEM = "ADD_ITEM";
export const LOGIN = "LOGIN"

export const createList = (showList) => ({
    type: CREATE_LIST,
    payload: showList
})

export const selectItem = (id) => ({
    type: SET_ITEM_SELECTED,
    payload: id
})

export const addItem = (item) =>({
    type: ADD_ITEM,
    payload:item
})

export const addToken = (token) =>({
    type: LOGIN,
    payload:token
})

