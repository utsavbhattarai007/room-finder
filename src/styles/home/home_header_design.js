import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  headerWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  searchCon: {
    flex: 1,
    justifyContent: "space-between",
    marginTop: 10,
    maxWidth: "100%",
  },
  searchText: {
    fontSize: 20,
    marginLeft: 3,
    fontFamily: "400",
  },
  searchWrapper: {
    marginTop: 10,
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  searchBar: {
    flex: 2,
    maxWidth: "85%",
    backgroundColor: "#E5E5E5",
    paddingVertical: 11,
    paddingHorizontal: 15,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    fontSize: 15,
    fontFamily: "300",
    color: "rgba(0, 0, 0, 1)",
  },
  searchBtn: {
    height: 50,
    maxWidth: "15%",
    backgroundColor: "#5B628F",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  filterCon: {
    marginTop: 25,
  },
  filterText: {
    fontSize: 18,
    fontFamily: "400",
    color: "rgba(0, 0, 0, 1)",
  },
  district: {
    marginTop: 10,
    maxWidth: "auto",
    minWidth: 150,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#E4E4E4",
    alignItems: "center",
    borderRadius: 10,
    marginRight: 10,
  },
  disText: {
    fontSize: 14,
    fontFamily: "300",
  },
  disWrapper: {
    flexDirection: "row",
  },
});
