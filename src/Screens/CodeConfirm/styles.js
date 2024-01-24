import { StyleSheet } from "react-native";
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styleCodeConfirm = StyleSheet.create({
    contarinerP:{
        flex:1,
        width:windowWidth,
        height:windowHeight,
        backgroundColor:"#2B85A2",
        alignItems:"center",
        justifyContent:"center",
    },
    container: {
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 9,
        marginBottom:12,
        marginTop:8,
       
      },
      input: {
        backgroundColor:'#FFF',
        textAlign:"center",
        maxWidth:48,
        maxHeight:48,
        padding:12,
        fontFamily: "Ubuntu",
        fontSize: 16,
        fontStyle: "normal",
        lineHeight: 24,
        letterSpacing: 0.5,
        borderRadius:8,
        
      },
      labelInput: {
        marginBottom:8,
        color: "#FFF",
        transform: [{ translateY: 6 }],
        fontFamily: "Ubuntu",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 300,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
        labelText: {
        marginBottom:8,
        color: "#FFF",
        transform: [{ translateY: 6 }],
        fontFamily: "Ubuntu_300Light",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: 300,
        lineHeight: 16,
        letterSpacing: 0.5,
      },
      labelInit: {
        marginBottom:8,
        color: "#F3B852",
        transform: [{ translateY: 6 }],
        fontFamily: "Ubuntu_500Medium",
        fontSize: 24,
        fontStyle: "normal",
        fontWeight: 500,
        lineHeight: 24,
        letterSpacing: 0.5,
        alignSelf: "stretch",
        
      },
      linkSignIn: {
        color: '#0067A6',
        fontFamily: "Ubuntu",
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: 400,
        letterSpacing: 0.5,
        alignSelf: "stretch",
        borderRadius:8,
      },
      boxBotao:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 56,
    
      },
      button: {
        justifyContent:'center',
        backgroundColor:'#EBC95D',
        width: 89,
        height:36,
      },
      textBotao:{
        alignItems:'center',
        height: 36,
        color:'#0B2C37',
        textAlign: 'center',
        fontFamily: 'Ubuntu',
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: 36,
        letterSpacing: 1.25,   
      },
      boxImage:{
        width:120,
        height:120,
        backgroundColor:'#D9D9D9',
        borderRadius:16,
      },
      boxTexts:{
        marginBottom:56,
        marginTop: 64,
      }
      
});
export default styleCodeConfirm;