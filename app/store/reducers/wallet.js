import * as actionTypes from "../actions/actionTypes";

const initialState = {
  balance: 0,
  totalIncome: 0,
  totalExpenses: 0,
  incomeActivity: [],
  expenseActivity: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INCOME:
      return {
        ...state,
        balance: state.balance + action.value,
        totalIncome: state.totalIncome + action.value,
        incomeActivity: [
          ...state.incomeActivity,
          {
            ...action.activityData,
            date: new Date().getTime(),
            // id: `Income-${state.incomeActivity.length}`,
          },
        ],
      };
    case actionTypes.ADD_EXPENSE:
      return {
        ...state,
        balance: state.balance - action.value,
        totalExpenses: state.totalExpenses + action.value,
        expenseActivity: [
          ...state.expenseActivity,
          {
            ...action.activityData,
            date: new Date().getTime(),
            // id: `Expense-${state.expenseActivity.length}`,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
