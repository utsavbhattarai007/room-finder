import React, { useContext, useState, Linking } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import { styles } from "../../styles/details/Detail_Header_design.js";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ContexStore } from "../../context/Context.js";
import { Entypo } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import NoContent from "../Global/NoContent.js";
import Comment from "./Comment.js";
const WhiteIcon = ({ text, icon }) => {
  return (
    <>
      <View style={styles.icon_single}>
        <View style={styles.actual_icon}>
          <MaterialCommunityIcons
            name={icon}
            size={24}
            color="rgba(0, 0, 0, 0.58)"
          />
        </View>
        <Text style={styles.icon_text}>{text}</Text>
      </View>
    </>
  );
};

const Detail_header = ({ room_id }) => {
  const { test } = useContext(ContexStore);
  const [roomDetail, setroomDetail] = useState([]);
  React.useEffect(() => {
    const singleRoom = test.filter((data) => {
      return data.oprn_id === room_id;
    });
    setroomDetail(singleRoom);
  }, []);
  const navigation = useNavigation();
  const makeCall = () => {
    let number = `tel:${roomDetail[0]?.number}`;
    Linking.openURL(number);
  };
  const imgs = roomDetail[0]?.thumbnail;

  const renderImgs = (data) => {
    return (
      <Image
        style={{ width: wp("100%"), height: 250 }}
        source={{
          uri: data.item,
        }}
      ></Image>
    );
  };

  return (
    <>
      <View>
        <Pressable onPress={() => navigation.goBack()} style={styles.arrow}>
          <AntDesign name="arrowleft" size={24} color="white" />
        </Pressable>
        {roomDetail.length === 0 ? (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            {NoContent("", "", "Sorry🙂, The Room is Unavailable")}
          </View>
        ) : (
          <>
            <FlatList
              nestedScrollEnabled={true}
              // viewabilityConfig={viewabilityConfig.current}

              showsHorizontalScrollIndicator={false}
              pagingEnabled
              horizontal
              data={imgs}
              renderItem={renderImgs}
              keyExtractor={(i) => {
                i.index;
              }}
            />

            <View style={styles.lower_wrapper}>
              <View style={styles.small_info_flex}>
                <View>
                  <Text style={styles.price}>Rs. {roomDetail[0]?.rate}</Text>
                  <Text style={styles.address}>{roomDetail[0]?.address}</Text>
                </View>
                <View style={styles.small_right}>
                  <Image
                    style={{ width: 35, height: 35, borderRadius: 500 }}
                    source={{
                      uri: roomDetail[0]?.user_profile,
                    }}
                  ></Image>
                </View>
              </View>

              {/* icons info  */}
              <View style={styles.icon_wrapper}>
                <WhiteIcon
                  text={`${roomDetail[0]?.rooms_count} rooms`}
                  icon={"bed"}
                />
                <WhiteIcon
                  text={roomDetail[0]?.isFlat ? "Yes" : "No"}
                  icon={"office-building"}
                />
                <WhiteIcon
                  text={roomDetail[0]?.iskitchen ? "Yes" : "No"}
                  icon={"silverware-fork-knife"}
                />
                <WhiteIcon text="available" icon={"toilet"} />
              </View>
              {/* description */}
              <View style={styles.header_con}>
                <View style={styles.desc_header}>
                  <Text style={styles.header_text}>Description</Text>
                  <Text style={styles.header_status}>
                    {roomDetail[0]?.status}
                  </Text>
                </View>

                <Text style={styles.desc_para}>{roomDetail[0]?.desc}</Text>
                {/* render map here */}
                <View style={styles.btn_wrapper}>
                  <Pressable
                    onPress={() => {
                      Alert.alert(
                        "Sorry!",
                        "This fearure is currently unavailable."
                      );
                    }}
                    style={styles.btn_apply}
                  >
                    <Text
                      style={{
                        color: "#fff",
                        fontSize: 15,
                        fontFamily: "500",
                      }}
                    >
                      Chat with Owner
                    </Text>
                  </Pressable>
                  <TouchableOpacity onPress={makeCall} style={styles.btn_left}>
                    <Entypo name="phone" size={24} color="#5B628F" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <Comment room_id={room_id} />
          </>
        )}
      </View>
    </>
  );
};

export default Detail_header;
