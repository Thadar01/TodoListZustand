import { View, Text, Pressable } from "react-native";
import React from "react";
import style from "../../Style";
import { useStore } from "../../state/store";

const Delete = ({ ondelete }) => {
  return (
    <View>
      <Pressable style={style.deletebutton} onPress={ondelete}>
        <Text style={style.deletetext}>Delete</Text>
      </Pressable>
    </View>
  );
};

export default Delete;
