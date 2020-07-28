import React, {useContext, useState} from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import Input from "../components/form/Input";
import {AppContext} from "../context/AppContext";
import show from "../api/show";


const LoginScreen = () => {

    const {dispatch} = useContext(AppContext);
    const [userNameState,setStateUserName] = useState("");
    const [passwordState,setStatePassword] = useState("");
    const [stateMsg,setStateMsg] = useState("");
    const login = () =>{
        if ((!userNameState)||(!passwordState)){
            setStateMsg("Você deve digitar um usuário ou uma senha");
            return;
        }
        const loginData = {
            email: userNameState,
            password: passwordState
        }
        show("").post("/auth/signin",loginData).then(response=>{
            const action = {
                type:"login",
                payload:response.data.access_token
            }
            dispatch(action);
        }).catch(error=>{
            if (error.status===401){
                setStateMsg("Usuário ou senha incorretos")
            } else {
                setStateMsg("Erro nos servidores. Tente mais tarde");
            }
        })
    }


    return (
        <>
            <View style={styles.viewStyle}>
                <Input label={"Usuário:"} initialValue={""} onChange={(text)=>setStateUserName(text)} />
                <Input label={"Senha:"} initialValue={""} onChange={(text)=>setStatePassword(text)} />
                <Button title={"Salvar"} onPress={login}/>
                <Text>{stateMsg?stateMsg:""}</Text>
            </View>
        </>
    )
}

const styles=StyleSheet.create({
    viewStyle:{
        marginTop:30
    }
})

export default LoginScreen;