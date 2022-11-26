import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  ToastAndroid,
} from "react-native";
import { styles } from "../../styles/myroom/my_room_card_design";
import { AntDesign } from "@expo/vector-icons";
//firebase
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useNavigation } from "@react-navigation/native";

const RoomCard = ({ data }) => {
  const navigation = useNavigation();
  const { address, rate, oprn_id } = data;
  const { thumbnail } = data;
  const deleteRoom = async (doc_id) => {
    try {
      const docRef = doc(db, "rooms", doc_id);
      await deleteDoc(docRef);
      ToastAndroid.showWithGravityAndOffset(
        "Deleted",
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        15,
        40
      );
    } catch (error) {
      console.log("error while", error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.card}>
          <View style={styles.left_side}>
            <Pressable
              onPress={() => {
                navigation.navigate("Detail", {
                  room_id: oprn_id,
                });
              }}
            >
              <Image
                style={styles.img}
                source={{
                  uri: thumbnail && thumbnail[0],
                }}
              />
            </Pressable>
          </View>

          <View style={styles.right_side}>
            <View style={styles.content}>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.address}
              >
                {address}
              </Text>
              <Text style={styles.price}>R.s {rate}</Text>
              <View style={styles.btn_grp}>
                <Pressable
                  onPress={() => {
                    Alert.alert(
                      "Sorry!",
                      "This fearure is currently unavailable. Please delete this room and repost it again"
                    );
                  }}
                  style={styles.btn}
                >
                  <Text style={styles.btn_text}>Edit Room</Text>
                </Pressable>
                <AntDesign
                  onPress={() => {
                    deleteRoom(oprn_id);
                  }}
                  style={styles.dlt}
                  name="delete"
                  size={20}
                  color="#5B628F"
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default RoomCard;
