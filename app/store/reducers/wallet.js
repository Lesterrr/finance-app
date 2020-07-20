import * as actionTypes from "../actions/actionTypes";

const initialState = {
  balance: 0,
  totalIncome: 0,
  totalExpenses: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INCOME:
      return {
        ...state,
        balance: state.balance + action.value,
        totalIncome: state.totalIncome + action.value,
      };
    case actionTypes.ADD_EXPENSE:
      return {
        ...state,
        balance: state.balance - action.value,
        totalExpenses: state.totalExpenses + action.value,
      };
    default:
      return state;
  }
};

export default reducer;
