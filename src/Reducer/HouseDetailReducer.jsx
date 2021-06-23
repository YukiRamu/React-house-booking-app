//Yuki

const initialState = {
  toDoItems: []
};

// Teamporary, Will be used for Detail page
const HouseDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return console.log("ADD");
    case "UPDATE":
      return console.log("UPDATE");
    case "DELETE":
      return console.log("DELETE");
    default:
      Error("Action type is not defined");
      return state;
  }
};

export default HouseDetailReducer;