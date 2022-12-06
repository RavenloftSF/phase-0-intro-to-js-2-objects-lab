const employee = {
    name: "apple",
    streetAddress: "depecheMode",
  };
  
function updateEmployeeWithKeyAndValue(employeeObj, key, value){
    let empObjCopy = {...employeeObj}
    empObjCopy[key] = value 
    return empObjCopy
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value 
    return employee
}

function deleteFromEmployeeByKey(employeeObj, key){
    let empObjCopy = {...employeeObj}
    empObjCopy[key] = value 
    return empObjCopy
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    employee[key] = value 
    return employee
}