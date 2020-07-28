import {createContext} from "react";

export const AppContext = createContext(); 

export const appReducer = (state,action)=>{
    switch(action.type){
        case "createList":
            return {showList:action.payload};
        case "setItemSelected":
            return {...state,itemSelected:action.payload}
        case "addItem":
            const showList = state.showList;
            showList.push(action.payload);
            return {...state,showList}   
        default:
            return state;
    }
};

export const initialState = {
    showList:new Array(),
    itemSelected:null
}