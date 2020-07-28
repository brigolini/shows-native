import {FlatList, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import React, {useState} from 'react';
import Details from "./Details";


const ShowList = (props) => {

    const [stateDetail, setStateDetail] = useState(null);
    return (
        <View style={styles.screen}>
            <View style={styles.list}>
                <FlatList
                    data={props.list}
                    renderItem={(data) =>
                        <TouchableOpacity
                            onPress={() => setStateDetail(data.item)}>
                            <View style={styles.button}>
                                <Text style={styles.text}>{data.item.name}</Text>
                            </View>
                        </TouchableOpacity>}
                    keyExtractor={(item) => item.id}
                />
            </View>
            <View style={styles.detail}>
                <Details item={stateDetail}/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    screen: {
        flexDirection: "column",
    },
    detail: {
        flex: 1,
    },
    list: {
        flex: 1,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 7,
        borderTopWidth: 1,
        borderColor: 'gray',
        backgroundColor: "#DCDCDC"
    },
    text: {
        marginRight: 10
    }
})

export default ShowList;