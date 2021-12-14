const UPDATE_USER = "UPDATE_USER";
const UPDATE_ROOM_ID = "UPDATE_ROOM_ID";

export const updateUser = (name) => ({ type: UPDATE_USER, payload: name });
export const updateRoomId = (id) => ({ type: UPDATE_ROOM_ID, payload: id });
