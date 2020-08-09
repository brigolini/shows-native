import showApi from "../api/show";
import { useEffect} from "react";
import {useDispatch} from "react-redux";

export const useShows=()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        showApi(state.token).get("/shows")
            .then(response=>{
                dispatch(createList(response.data));
            })
    },[]);

    return {shows:state.showList};
}