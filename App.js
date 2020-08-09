import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import {NavigationContainer} from "@react-navigation/native";
import NewShowScreen from "./src/screens/NewShow";
import ShowsScreen from "./src/screens/Shows";
import HomeScreen from "./src/screens/Home";
import LoginScreen from "./src/screens/Login"
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {AntDesign, Feather, Ionicons} from '@expo/vector-icons';
import {Provider,useSelector} from "react-redux";
import {createStore} from "redux";
import {appReducer} from "./src/redux/reducer";

const TabNav = createBottomTabNavigator();

const tabBarStyles = StyleSheet.create({
    viewStyle: {
        flexDirection:"row",
        justifyContent:"space-around"
    }
})


const TabBar = ({navigation,state}) => {
    return (
        <View style={tabBarStyles.viewStyle}>
            <>
                <TouchableOpacity onPress={()=>navigation.navigate("Home")}>
                    <AntDesign name="home" size={30}
                               color={state.index===0?"blue":"black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("Shows")}>
                    <Feather name="list" size={30}
                             color={state.index===1?"blue":"black"} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate("NewShow")}>
                    <Ionicons name="md-add" size={30} color="black"
                              color={state.index===2?"blue":"black"} />
                </TouchableOpacity>
            </>
        </View>
    )
}

const store = createStore(appReducer);
function App() {
    return (

        <Provider store={store}>
            {useSelector(state=>state).token?
                <NavigationContainer>
                    <TabNav.Navigator tabBar={props=> <TabBar {...props}/>}>
                        <TabNav.Screen name={"Home"} component={HomeScreen}/>
                        <TabNav.Screen name={"Shows"} component={ShowsScreen}/>
                        <TabNav.Screen name={"NewShow"} component={NewShowScreen}/>
                    </TabNav.Navigator>
                </NavigationContainer>
                :
                <LoginScreen/>
            }
        </Provider>
    )
}

export default App;