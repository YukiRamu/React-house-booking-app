const PropertyDetailReducer = (state, action) => {

  console.log(state);
  console.log(action.payload);

  switch (action.type) {
    case "IMG_FETCH_SUCCESS":
      return {
        ...state,
        roomImg: action.payload.hits
      };
    case "SHOW_PROPERTY":
      return state;

    default:
      Error("Action type is not defined");
      return state;
  }
};

export default PropertyDetailReducer;