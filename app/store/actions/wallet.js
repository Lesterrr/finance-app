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

export const updateActivity = (id, activityData) => {
  return {
    type: actionTypes.UPDATE_ACTIVITY,
    id: id,
    activityData: activityData,
  };
};
