import { StyleSheet } from "react-native";
import { widthPercentageToDP } from "react-native-responsive-screen";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const styles = StyleSheet.create({
  no_content_con: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text1: {
    fontFamily: "500",
    fontSize: 30,
    textAlign: "center",
  },
  text2: {
    fontFamily: "400",
    fontSize: 18,
    color: "#a1a1a1",
    flex: 1,
    textAlign: "center",
  },
  img: {
    width: 200,
    height: 200,
  },
});
