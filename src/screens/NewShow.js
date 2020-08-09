import React, {useContext, useState} from "react";
import {Button, StyleSheet, View} from "react-native";
import Input from "../components/form/Input";
import showApi, {defaultErrorHandler} from "../api/show";
import {useDispatch} from "react-redux";

const NewShowScreen = () => {

    const [stateName,setStateName] = useState("");
    const [stateNetwork,setStateNetwork] = useState("");
    const [stateCountry,setStateCountry] = useState("");
    const [stateThumbNail,setStateThumbNail] = useState("");
    const dispatch = useDispatch();

    const signin=()=>{

        const newShow = {
            name:stateName,
            netWork:stateNetwork,
            country:stateCountry,
            image_thumbnail_path:stateThumbNail,
        }
        showApi(state.token).post("/shows",newShow).then(response=>{
            dispatch(addItem(response.data.access_token))
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