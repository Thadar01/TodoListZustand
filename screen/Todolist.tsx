import { View, Text } from "react-native";
import React from "react";
import Input from "./Input/Input";
import List from "./List/List";

const Todolist = () => {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: "black" }}>
        <Input />
      </View>
    </>
  );
};

export default Todolist;
