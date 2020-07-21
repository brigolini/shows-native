import {Text, View, StyleSheet} from "react-native";
import React, {useEffect,useContext} from 'react';
import show from "../api/show"
import ShowList from "../components/ShowList";
import {AppContext} from "../context/AppContext";


const ListShowsScreen = () => {
    const {state,dispatch} = useContext(AppContext)
    useEffect(() => {
        if (state.showList.length===0){
            show.get('/shows')
                .then(response => {
                    let showList = [...response.data];
                    showList = showList.sort((show1, show2) => show1.name.localeCompare(show2.name));
                    const action={type:"createList",payload:showList};
                    dispatch(action);
                })
                .catch(reason => {
                    console.info(reason);
                    if (reason.status == 401) {
                        console.info("Sem acesso")
                    }
                });
        }
    }, [])

    return (
        <>
            <View style={styles.viewStyle}>
                {state.showList === null ?
                    <Text>Aguarde...</Text>
                    :
                    <ShowList list={state.showList}/>
                }

            </View>
        </>

    );
}
const styles = StyleSheet.create({
    viewStyle: {
        marginTop:50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    }
});

export default ListShowsScreen;