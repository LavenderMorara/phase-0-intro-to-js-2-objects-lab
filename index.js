const employee={
    name:"Tye",
    streetAddress:21009
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    let newEmployee;
    newEmployee={...employee, [key]:value}
   
   return newEmployee
}
//console.log(updateEmployeeWithKeyAndValue(employee,"age",31))

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
   employee[key]=value
    return employee
}
//console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, "gender", "male"))

function deleteFromEmployeeByKey(employee,key){
    let newEmployee;
    newEmployee={...employee}
    delete newEmployee[key]
    return newEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key]
    return employee
}