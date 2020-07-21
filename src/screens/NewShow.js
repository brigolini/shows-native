import {Button, View, StyleSheet} from "react-native";
import React, {useContext, useState} from 'react';
import Input from "../components/form/Input";
import {AppContext} from "../context/AppContext";

const NewShowScreen = () => {
    const [stateName,setStateName] = useState("");
    const [stateNetWork,setStateNetWork] = useState("");
    const [stateCountry,setStateCountry] = useState("");
    const [stateThumbNail,setstateThumbNail] = useState("");
    const {dispatch} = useContext(AppContext)
    const salvar = ()=>{
        const action={type:"addItem",payload:{name:stateName,netWork:stateNetWork,country:stateCountry,image_thumbnail_path:stateThumbNail}}
        dispatch(action);
    }
    return (
        <View style={styles.viewStyle}>
            <Input label={"Nome:"} onChange={(text)=>setStateName(text)}/>
            <Input label={"NetWork:"} onChange={(text)=>setStateNetWork(text)}/>
            <Input label={"Country:"} onChange={(text)=>setStateCountry(text)}/>
            <Input label={"ThumbNail:"} onChange={(text)=>setstateThumbNail(text)}/>
            <Button title={"Salvar"} onPress={()=>salvar()}/>
        </View>
    );
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        marginTop: 30,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: '#fff'
    }
});

export default NewShowScreen;