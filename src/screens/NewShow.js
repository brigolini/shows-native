import React, {useContext, useState} from "react";
import {Button, StyleSheet, View} from "react-native";
import Input from "../components/form/Input";
import {AppContext} from "../context/AppContext";
import showApi, {defaultErrorHandler} from "../api/show";

const NewShowScreen = () => {

    const [stateName,setStateName] = useState("");
    const [stateNetwork,setStateNetwork] = useState("");
    const [stateCountry,setStateCountry] = useState("");
    const [stateThumbNail,setStateThumbNail] = useState("");
    const {dispatch,state} = useContext(AppContext);

    const signin=()=>{

        const newShow = {
            name:stateName,
            netWork:stateNetwork,
            country:stateCountry,
            image_thumbnail_path:stateThumbNail,
        }
        showApi(state.token).post("/shows",newShow).then(response=>{
            const action = {
                type:"addItem",
                payload:response.data.access_token
            };
            dispatch(action);
        }).catch(defaultErrorHandler);


    }

    return (
        <>
            <View style={styles.viewStyle}>
                <Input label={"Nome:"} initialValue={""} onChange={(text)=>setStateName(text)} />
                <Input label={"NetWork:"} initialValue={""} onChange={(text)=>setStateNetwork(text)} />
                <Input label={"Country:"} initialValue={""} onChange={(text)=>setStateCountry(text)} />
                <Input label={"ThumbNail"} initialValue={""} onChange={(text)=>setStateThumbNail(text)} />
                <Button title={"Salvar"} onPress={signin}/>
            </View>
        </>
    )
}

const styles=StyleSheet.create({
    viewStyle:{
        marginTop:30
    }
})

export default NewShowScreen;