import _ from "lodash";

const isEmpty = (value) => {
  if(value === undefined || value === null) {
    return true;
  }
  if(typeof value === "string" && value.trim() === "") {
    return true
  }
  if(value instanceof File) {
    return false
  }

  const isComplexType = [_.isArray, _.isObject].some(f => f(value));
  return isComplexType && _.isEmpty(value);
};

export const required = (value) => {
  if(isEmpty(value)) {
    return "This field is required"
  }
};