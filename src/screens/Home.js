import {Text, View, StyleSheet, FlatList} from "react-native";
import React, {useState, useEffect} from 'react';
import show from "../api/show"

const HomeScreen = () => {
    [stateShows, setStateShows] = useState(null);
    useEffect(() => {
        show.get('/shows')
            .then(response => {
                let showList = [...response.data];
                showList = showList.sort((show1, show2) => show1.name.localeCompare(show2.name));
                setStateShows(showList);
            })
            .catch(reason => {
                console.info(reason);
                if (reason.status == 401) {
                    console.info("Sem acesso")
                }
            });
    }, [])

    return (
        <View style={styles.viewStyle}>
            {stateShows === null ?
                <Text>Aguarde... </Text>
                :
                <FlatList
                    data={stateShows}
                    renderItem={(data) => <Text>{data.item.name}</Text>}
                    keyExtractor={(item) => item.id}
                />
            }

        </View>
    );
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