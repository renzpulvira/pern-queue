const userInitState = {
  name: "",
  room_id: "",
};

// TODO: Scratch this

export default function currentUserName(state = "", action) {
  switch (action.type) {
    case "UPDATE_USER":
      state[name] = action.payload;
      return state;
    case "UPDATE_ROOM_ID":
      state[room_id] = action.payload;
      return state;
    default:
      return { name: state.name, room_id: state.room_id };
  }
}
