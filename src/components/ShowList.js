import {FlatList, Text, TouchableOpacity, StyleSheet, View} from "react-native";
import React from 'react';
import {Feather} from '@expo/vector-icons';


const ShowList = (props) => {

    return (
        <FlatList
            data={props.list}
            renderItem={(data) =>
                <TouchableOpacity
                    onPress={() => console.info("Go to " + data.item.id)}>
                    <View style={styles.button}>
                        <Text style={styles.text}>{data.item.name}</Text>
                        <TouchableOpacity onPress={()=>console.info("Apaga " + data.item.id)}>
                            <Feather style={styles.icon} name="trash"/>
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>}
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray',
        backgroundColor: "#DCDCDC"
    },
    text: {
        marginRight: 10
    }
})

export default ShowList;