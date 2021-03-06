import * as actionTypes from "../actions/actionTypes";

const initialState = {
  showOnBoard: true, // IsFirstTime? opening the app.
  // IsDarkMode?
  // IsOnline?
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_STARTED:
      return {
        ...state,
        showOnBoard: false,
      };
    default:
      return state;
  }
};

export default reducer;
