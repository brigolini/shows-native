import React from "react";
import {View, StyleSheet} from "react-native";
import {ShowList} from "../components/list/ShowList";
import ShowDetail from "../components/detail/ShowDetail";

const ShowsScreen = () =>{
    return (
        <>
          <View style={styles.parentStyle}>
              <View style={styles.listStyle}>
               <ShowList/>
              </View>
              <View style={styles.detailStyle}>
               <ShowDetail/>
              </View>
          </View>
       
        </>
    )
}

const styles = StyleSheet.create({
    parentStyle:{
      flex:1,
      marginTop:20
    },
    listStyle:{
        flex:4
    },
    detailStyle:{
        flex:3
    }
})

export default ShowsScreen;