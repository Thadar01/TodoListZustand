import { dataType, listType } from "./type";

export const states = (set): dataType => ({
  list: [],
  addlist: (lists: listType) =>
    set((state) => ({
      list: [...state.list, lists],
    })),
  deletelist: (id) =>
    set((state) => ({
      list: state.list.filter((item) => item.id !== id),
    })),
  editlist: (id, newvalue) =>
    set((state) => ({
      list: state.list.map((item) =>
        item.id === id ? { ...item, value: newvalue } : item
      ),
    })),
});
