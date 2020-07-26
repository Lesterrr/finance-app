import * as actionTypes from "./actionTypes";

export const addCategory = (data) => {
  return {
    type: actionTypes.ADD_CATEGORY, // call the reducers with this action type.
    categoryData: data,
  };
};
