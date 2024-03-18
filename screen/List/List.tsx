import { View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import style from "../../Style";
import Delete from "./Delete";
import { useStore } from "../../state/store";

const List = ({ value }) => {
  const { list, deletelist, editlist } = useStore();
  const [edit, setEditid] = useState(Number);
  const [white, setwhite] = useState("#c0c1c2");
  const deleteHandelar = (id) => {
    deletelist(id);
  };
  const editHandelar = (id, newValue) => {
    editlist(id, newValue);
    console.log(newValue);
    setEditid(id);
    setwhite("white");
  };
  return (
    <FlatList
      data={list}
      renderItem={({ item }) => (
        <View style={style.addcontainer}>
          <View style={style.inputcontainer}>
            <TextInput
              value={item.value}
              style={[
                style.listbox,
                { backgroundColor: edit === item.id ? white : "#c0c1c2" },
              ]}
              editable={true}
              onChangeText={(newvalue) => editHandelar(item.id, newvalue)}
              onFocus={() => editHandelar(item.id, item.value)}
              onBlur={() => {
                setEditid(null);
                setwhite("#c0c1c2");
              }}
            />
          </View>
          <Delete ondelete={() => deleteHandelar(item.id)} />
        </View>
      )}
    />
  );
};

export default List;
