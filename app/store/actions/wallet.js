import * as actionTypes from "./actionTypes";

export const addIncome = (amount) => {
  return {
    type: actionTypes.ADD_INCOME,
    value: amount,
  };
};

export const addExpense = (amount) => {
  return {
    type: actionTypes.ADD_EXPENSE,
    value: amount,
  };
};
