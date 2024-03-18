import { View, Text, SafeAreaView, TextInput } from "react-native";
import React, { useState } from "react";
import style from "../../Style";
import Add from "./Add";
import { useStore } from "../../state/store";
import List from "../List/List";

const Input = () => {
  const [value, setValue] = useState("");
  const { list, addlist } = useStore();
  const onchange = (text) => {
    setValue(text);
  };
  const press = () => {
    // console.log("text", value);
    let newdata = {
      id: list.length,
      value: value,
    };
    //console.log("obj", newdata);
    addlist(newdata);
    setValue("");
  };
  return (
    <SafeAreaView>
      <View style={style.headercontainer}>
        <Text style={style.header}>To do List</Text>
      </View>
      <View style={style.addcontainer}>
        <View style={style.inputcontainer}>
          <TextInput
            placeholder="Enter your tasks"
            placeholderTextColor="#8c8d8f"
            style={style.inputbox}
            value={value}
            onChangeText={onchange}
          />
        </View>
        <Add press={press} />
      </View>
      <List value={value} />
    </SafeAreaView>
  );
};

export default Input;
