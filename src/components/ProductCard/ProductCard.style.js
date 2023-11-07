import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        borderWidth:1,
        borderRadius:10,
        borderColor:'#bdbdbd',
        margin:10,
        justifyContent:'center',
        flexDirection:'row',
    },
    image:{
        width:100,
        minHeight:100,
        resizeMode:'contain',
        backgroundColor:'#fff'
    },
    body:{
        padding:10,
        flex:1,
        justifyContent:'space-between'
    },
    title:{
        fontSize:17,
        fontWeight:'bold',
        textAlign:'center'
    },
    price:{
        fontSize:15,
        marginTop:10,
        textAlign:'right',
        fontStyle:'italic'
    },
});
