const employee = {};

function updateEmployeeWithKeyAndValue(obj, key, value) {
  return {
    ...obj, //create copy of object
    [key]: value,
  };
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
  obj[key] = value;
  return obj;
}

function deleteFromEmployeeByKey(obj, key) {
  const newObj = { ...obj }; //creates copy of object
  delete newObj[key];
  return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
  delete obj[key];
  return obj;
}