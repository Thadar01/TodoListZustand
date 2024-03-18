export type listType = {
  id: number;
  value: string;
};
export type dataType = {
  list: listType[];
  addlist: (lists: listType) => void;
  deletelist: (id) => void;
  editlist: (id, newvalue) => void;
};
