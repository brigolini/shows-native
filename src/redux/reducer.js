import {CREATE_LIST,SET_ITEM_SELECTED,ADD_ITEM,LOGIN} from "./actions"

export const initialState = {
    showList:new Array(),
    itemSelected:null,
    token:null
}

export const appReducer = (state=initialState,action)=>{
    switch(action.type){
        case CREATE_LIST:
            return {...state,showList:action.payload};
        case SET_ITEM_SELECTED:
            return {...state,itemSelected:action.payload}
        case ADD_ITEM:
            const showList = state.showList;
            showList.push(action.payload);
            return {...state,showList}
        case LOGIN:
            return {...state,token:action.payload}
        default:
            return state;
    }
};