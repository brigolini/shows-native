import {Text, View, StyleSheet} from "react-native";
import React, {useState, useEffect} from 'react';
import show from "../api/show"
import ShowList from "../components/ShowList";
import NewShowScreen from "./NewShow";
import {NavigationContainer} from "@react-navigation/native";

const HomeScreen = () => {


    return (
        <>
        <View style={styles.viewStyle}>
        <Text>Séries Inc.</Text>
        </View>

</>
)
    ;
}
const styles = StyleSheet.create({
    viewStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
});

export default HomeScreen;