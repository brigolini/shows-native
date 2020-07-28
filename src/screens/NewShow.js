import React,{useState,useContext} from "react";
import {View, StyleSheet,Button} from "react-native";
import Input from "../components/form/Input";
import {AppContext} from "../context/AppContext"

const NewShowScreen = () => {
    
    const [stateName,setStateName] = useState("");
    const [stateNetwork,setStateNetwork] = useState("");
    const [stateCountry,setStateCountry] = useState("");
    const [stateThumbNail,setStateThumbNail] = useState("");
    const {dispatch,state} = useContext(AppContext);

    const salvar=()=>{
      const newId = state.showList.sort((show1,show2)=>show2.id - show1.id).pop().id+1;
      const action = {
         type:"addItem",
         payload:{
           id:newId,
           name:stateName,
           netWork:stateNetwork,
           country:stateCountry,
           image_thumbnail_path:stateThumbNail,
         }
      };
      dispatch(action);
    }

    return (
        <>
        <View style={styles.viewStyle}>
          <Input label={"Nome:"} initialValue={""} onChange={(text)=>setStateName(text)} />
          <Input label={"NetWork:"} initialValue={""} onChange={(text)=>setStateNetwork(text)} />
          <Input label={"Country:"} initialValue={""} onChange={(text)=>setStateCountry(text)} />
          <Input label={"ThumbNail"} initialValue={""} onChange={(text)=>setStateThumbNail(text)} />
          <Button title={"Salvar"} onPress={salvar}/>
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