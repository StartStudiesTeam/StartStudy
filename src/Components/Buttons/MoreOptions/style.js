import { StyleSheet } from "react-native";



const styleMoreOptions = StyleSheet.create({
  screen: {
    position: 'absolute',
    alignItems: 'center'
  },
  button: {
    position: 'absolute',
    bottom: 10,
    width: 60,
    height: 60,
    borderRadius: 30, //or 60/2 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#c8d6e5',
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 10
    },
    elevation: 4
  },
  menu: {
    backgroundColor: '#F2F2F2'
  },
  secondary: {
    width: 48,
    height: 48,
    borderRadius: 24, //or 48/2
    backgroundColor: '#fff'
  }
})
export default styleMoreOptions;
