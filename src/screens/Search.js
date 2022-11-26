import { Text, View, FlatList, ScrollView } from "react-native";
import Card from "../components/Global/Card";
import React, { useContext } from "react";
import { styles } from "../styles/search/search_design";
import NoContent from "../components/Global/NoContent";
import { ContexStore } from "../context/Context";

const Search = ({ route }) => {
  const { test } = useContext(ContexStore);
  const renderCard = ({ item }) => {
    return <Card data={item} check="yes" />;
  };

  const { search } = route.params;
  const { data } = route.params;
  const searchProduct = test.filter((val) => {
    if (search) {
      return (
        val.address.toLowerCase().includes(search.toLowerCase()) ||
        val.district.toLowerCase().includes(search.toLowerCase())
      );
    }
    return (
      val.address.toLowerCase().includes(data.toLowerCase()) ||
      val.district.toLowerCase().includes(data.toLowerCase())
    );
  });
  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#fff" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.search_con}>
          {searchProduct.length > 0 ? (
            <Text style={styles.search_text}>
              Result for : {data || search}
            </Text>
          ) : null}

          <FlatList
            ListEmptyComponent={NoContent(search, `District ${data}`)}
            data={searchProduct}
            renderItem={renderCard}
            showsVerticalScrollIndicator={false}
            style={styles.wrapper}
            keyExtractor={(index) => index.oprn_id}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default Search;
