import React,{useState} from "react";
import {StyleSheet,TextInput,Text, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import GenericInput from "./GenericInput"

const SearchInput = (props) => {

  const onChange = (text)=>{
      if (props.onChange)
        props.onChange(text);
  }

  return(
      <>
      <View style={styles.viewStyle}>
      <AntDesign style={styles.iconStyle} name="search1" size={24} color="black" />
      <GenericInput initialValue={props.initialValue} style={styles.inputStyle}
        onChangeText={onChange}/>
      </View>
      </>
  )
}

export default SearchInput;

const styles = StyleSheet.create({
  viewStyle:{
    flexDirection:"row",
    backgroundColor:"#d1cdcd",
    borderRadius:50
  },
   inputStyle:{
     marginLeft:5
   },
  iconStyle:{
    alignSelf:"center"
  } 
})