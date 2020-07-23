import show from "../api/show";
import {useContext, useEffect} from "react";
import { AppContext } from "../context/AppContext";

export const useShows=()=>{
    const {state,dispatch} = useContext(AppContext);
    useEffect(()=>{
        show.get("/shows")
            .then(response=>{
                const action = {type:"createList",payload:response.data};
                dispatch(action);
            })
    },[]);

    return {shows:state.showList};
}