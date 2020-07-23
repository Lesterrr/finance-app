import * as actionTypes from "../actions/actionTypes";

const initialState = {
  balance: 0,
  totalIncome: 0,
  totalExpenses: 0,
  activity: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INCOME:
      return {
        ...state,
        balance: state.balance + action.value,
        totalIncome: state.totalIncome + action.value,
        activity: [
          ...state.activity,
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
        activity: [
          ...state.activity,
          {
            ...action.activityData,
            date: new Date().getTime(),
            // id: `Expense-${state.expenseActivity.length}`,
          },
        ],
      };
    case actionTypes.UPDATE_ACTIVITY:
      let updatedActivity = state.activity.map((item) =>
        item.date !== action.id ? item : action.activityData
      );
      console.log(updatedActivity);
      return {
        ...state,
        activity: updatedActivity,
      };
    default:
      return state;
  }
};

export default reducer;
