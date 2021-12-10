const initialState = {
  data: [],
  timeframe: "",
};

const rootReducer =  (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        data: action.data,
        timeframe: action.timeframe
      };
    default:
      return state;
  }
};

export default rootReducer;