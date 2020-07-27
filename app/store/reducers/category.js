import * as actionTypes from "../actions/actionTypes";

const initialState = {
  categories: [
    /*{ id: 1, title: "Savings", iconName: "attach-money" }*/
    { id: 1, name: "Savings", icon: "attach-money" },
    { id: 2, name: "Transportation", icon: "directions-bus" },
    { id: 3, name: "Shopping", icon: "shopping-cart" },
  ],
};

const reducer = (state = initialState, action) => {
  let updatedData;
  switch (action.type) {
    case actionTypes.ADD_CATEGORY:
      return {
        categories: [...state.categories, action.categoryData],
      };
    case actionTypes.DELETE_ACTIVITY:
      updatedData = state.categories.filter((item) => item.id !== action.id);
      return {
        categories: updatedData,
      };
    default:
      return state;
  }
};

export default reducer;
