// Write your solution in this file!
const employee={
    name:"Njenga",
    streetAddress:"119 Westlands",
};

function updateEmployeeWithKeyAndValue(employee, key, value){

    return{
        ...employee,[key]:value,
};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value)
{
    
employee[key]=value
return employee

}
    
destructivelyUpdateEmployeeWithKeyAndValue(employee,"name","Sam","streetAddress","12 Broadway");
//destructivelyUpdateEmployeeWithKeyAndValue(employee,"streetAddress","12 Broadway");


function deleteFromEmployeeByKey(employee,key){
   const newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
   
}

deleteFromEmployeeByKey(newEmployee,"name");


function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee[key];
    return employee;
}
destructivelyDeleteFromEmployeeByKey(employee,"name");