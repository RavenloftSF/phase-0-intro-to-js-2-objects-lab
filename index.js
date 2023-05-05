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
    delete empObjCopy[key] 
    return empObjCopy
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}