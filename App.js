import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screens/Home';
import DetailsScreen from "./src/components/Details";
import NewShowScreen from "./src/screens/NewShow";
import React, {useReducer} from 'react';
import {appReducer, initialState, AppContext} from "./src/context/AppContext";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ListShowsScreen from "./src/screens/ListShows";
import {View} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    viewStyle: {
        flexDirection: "row",
        justifyContent: 'space-around',
    }
});
const TabBar = ({navigation}) => {
    return (
        <View style={styles.viewStyle}>
            <>
                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                    <AntDesign name="home" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Shows")}>
                    <Entypo name="list" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("NewShow")}>
                    <Ionicons name="md-add" size={24} color="black" />

                </TouchableOpacity>

            </>

            {/*<Text onPress={()=>navigation.navigate("Home")}>Home</Text>*/}
            {/*<Text onPress={()=>navigation.navigate("Shows")}>Shows</Text>*/}
            {/*<Text onPress={()=>navigation.navigate("NewShow")}>New Show</Text>*/}

        </View>
    )
}
export default function App() {

    const [state, dispatch] = useReducer(appReducer, initialState);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            <NavigationContainer>
                <Tab.Navigator tabBar={props => <TabBar {...props}/>}>
                    <Tab.Screen name="Home" component={HomeScreen}/>
                    <Tab.Screen name="Details" component={DetailsScreen}/>
                    <Tab.Screen name="Shows" component={ListShowsScreen}/>
                    <Tab.Screen name="NewShow" component={NewShowScreen}/>
                </Tab.Navigator>
            </NavigationContainer>
        </AppContext.Provider>
    );
}


