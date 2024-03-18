import { View, Text, Pressable } from "react-native";
import React from "react";
import style from "../../Style";

const Add = ({ press }) => {
  return (
    <View>
      <Pressable style={style.addbutton} onPress={press}>
        <Text style={style.addtext}>Add</Text>
      </Pressable>
    </View>
  );
};

export default Add;
