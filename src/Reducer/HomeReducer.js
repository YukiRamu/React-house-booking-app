const HomeReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, fetchedData: action.payload };
    case "OPEN":
      return { openModal: true };
    case "CLOSE":
      return { openModal: false };
  }
};

export default HomeReducer;
