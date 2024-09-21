import { StyleSheet } from "react-native";
import { font } from "../../../utils/Fonts/fonts";



const styleRegisterRoad = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffa',
    paddingTop: 64,
  },
  title: {
    alignSelf: 'center',
    fontFamily: font.medium,
    color: '#ccc',
    fontSize: 20,
    marginBottom: 8,
    marginTop: 16,
  }
});

export default styleRegisterRoad;
