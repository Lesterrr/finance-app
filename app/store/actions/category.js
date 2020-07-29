import * as actionTypes from "./actionTypes";

export const addCategory = (data) => {
  return {
    type: actionTypes.ADD_CATEGORY, // call the reducers with this action type.
    categoryData: data,
  };
};

export const deleteCategory = (id) => {
  return {
    type: actionTypes.DELETE_CATEGORY,
    id: id,
  };
};

export const updateCategory = (data) => {
  return {
    type: actionTypes.UPDATE_CATEGORY,
    categoryData: data,
  };
};
