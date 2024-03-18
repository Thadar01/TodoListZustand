import { StyleSheet } from "react-native";
const style = StyleSheet.create({
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
  headercontainer: {
    alignItems: "center",
    height: 30,
    justifyContent: "center",
    margin: 10,
  },
  inputbox: {
    borderWidth: 2,
    borderColor: "white",
    color: "white",
    height: 40,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 7,
  },
  inputcontainer: {
    width: 280,
    margin: 10,
  },
  addtext: {
    fontSize: 18,
    fontWeight: "bold",
  },
  addbutton: {
    backgroundColor: "white",
    width: 70,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    marginLeft: 0,
  },
  addcontainer: {
    display: "flex",
    flexDirection: "row",
  },
  listbox: {
    backgroundColor: "#c0c1c2",
    height: 40,
    borderRadius: 10,
    fontSize: 20,
    paddingLeft: 7,
  },
  deletebutton: {
    backgroundColor: "#8f0d0e",
    width: 70,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    margin: 10,
    marginLeft: 0,
    borderWidth: 1,
    borderColor: "white",
  },
  deletetext: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default style;
