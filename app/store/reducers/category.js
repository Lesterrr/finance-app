import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [
    /*{ id: 1, title: "Savings", iconName: "attach-money" }*/
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return {
        categories: [...state.categories, action.categoryData],
      };
    default:
      return state;
  }
};

export default reducer;
