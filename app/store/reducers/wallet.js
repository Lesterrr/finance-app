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
        item.date !== action.activityData.date ? item : action.activityData
      );

      let updatedBalance =
        state.balance - action.oldAmount + action.activityData.amount;
      let updatedTotalIncome = state.totalIncome;
      let updatedTotalExpenses = state.totalExpenses;

      if (!action.activityData.isIncome) {
        updatedBalance =
          state.balance + action.oldAmount - action.activityData.amount;
        updatedTotalExpenses =
          state.totalExpenses - action.oldAmount + action.activityData.amount;
      } else {
        updatedTotalIncome =
          state.totalIncome - action.oldAmount + action.activityData.amount;
      }
      if (action.isModeChanged && action.activityData.isIncome) {
        updatedBalance =
          state.balance + action.oldAmount + action.activityData.amount;
        updatedTotalIncome = state.totalIncome + action.activityData.amount;
        updatedTotalExpenses = state.totalExpenses - action.oldAmount;
      }
      if (action.isModeChanged && !action.activityData.isIncome) {
        updatedBalance =
          state.balance - action.oldAmount + -action.activityData.amount;
        updatedTotalIncome = state.totalIncome - action.oldAmount;
        updatedTotalExpenses = state.totalExpenses + action.activityData.amount;
      }

      return {
        ...state,
        balance: updatedBalance,
        totalIncome: updatedTotalIncome,
        totalExpenses: updatedTotalExpenses,
        activity: updatedActivity,
      };
    case actionTypes.DELETE_ACTIVITY:
      const newActivity = state.activity.filter(
        (item) => item.date !== action.id
      );

      let updatedData = {};
      if (action.isIncome) {
        updatedData = {
          balance: state.balance - action.amount,
          totalIncome: state.totalIncome - action.amount,
        };
      } else {
        updatedData = {
          balance: state.balance + action.amount,
          totalExpenses: state.totalExpenses - action.amount,
        };
      }
      return {
        ...state,
        ...updatedData,
        activity: newActivity,
      };
    default:
      return state;
  }
};

export default reducer;
