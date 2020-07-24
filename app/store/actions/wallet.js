import * as actionTypes from "./actionTypes";

export const addIncome = (amount, activityData) => {
  return {
    type: actionTypes.ADD_INCOME,
    value: amount,
    activityData: activityData,
  };
};

export const addExpense = (amount, activityData) => {
  return {
    type: actionTypes.ADD_EXPENSE,
    value: amount,
    activityData: activityData,
  };
};

export const updateActivity = (activityData, prevAmount, isModeChanged) => {
  return {
    type: actionTypes.UPDATE_ACTIVITY,
    activityData: activityData,
    oldAmount: prevAmount,
    isModeChanged: isModeChanged,
  };
};
