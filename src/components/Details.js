import {Text, View, StyleSheet, Image} from "react-native";
import React from 'react';

const Details = (props) => {

    return (
        <>
            {props.item ?
                <View style={styles.viewStyle}>
                    <Text>Nome:{props.item.name}</Text>
                    <Text>Country:{props.item.country}</Text>
                    <Text>NetWork:{props.item.network}</Text>
                    <Image
                        style={styles.picture}
                        resizeMode='contain'
                        source={{uri:props.item.image_thumbnail_path}}
                    />
                </View>
                :
                null
            }

        </>
    );
}
const styles = StyleSheet.create({
    picture:{
        height:200,
        width:500
    },
    viewStyle: {
        marginTop:10,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#b1c4e3'
    }
});

export default Details;