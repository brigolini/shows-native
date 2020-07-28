import React,{useContext} from "react";
import {Text,View,StyleSheet,Image} from "react-native";
import {AppContext} from "../../context/AppContext"

const ShowDetail = ()=>{
    const {state} = useContext(AppContext);
    const {name, country, network,image_thumbnail_path} = 
                            state.itemSelected?
                            state.showList.find(item=>item.id===state.itemSelected)
                                          :
                            {name:"",country:"",network:"",
                                            image_thumbnail_path:""};
    return (
        <>
        <View style={styles.parentStyle}>
            <View style={styles.viewStyle}>
            <Text>Nome:{name}</Text>
            <Text>Country:{country}</Text>
            <Text>Network:{network}</Text>
            <Image
            style={styles.pictureStyle}
            resizeMode={"contain"}
            source={image_thumbnail_path?{uri:image_thumbnail_path}:null}
            />
            </View>
        </View>
        </>
    )
}

const styles=StyleSheet.create({
  parentStyle:{
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center",
  },
  viewStyle:{
      alignSelf:"center",
      alignItems:"center",
  },
  pictureStyle:{
      height:200,
      width:300
  }
})
export default ShowDetail;