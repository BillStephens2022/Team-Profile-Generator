// Import Employee class with require()
const Employee = require("../lib/employee");

describe("Employee", () => {   
    // Test instantiate Employee instance
    it("can instantiate a new Employee instance", () => {
        const newEmployee = new Employee("Bill", "95AA", "bill@fakemail.com");
        expect(typeof(newEmployee)).toEqual("object");
    });
    // Test setting name of an employee
    it("can set a name as an object property for an Employee via constructor", () => {
        const nameTestValue = "Bill"    
        const newEmployee = new Employee(nameTestValue, "95AA", "bill@fakemail.com");
        expect(newEmployee.name).toEqual(nameTestValue);
    });
    // Test setting id of an employee
    it("can set an ID as an object property for an Employee via constructor", () => {
        const idTestValue = "95AA"    
        const newEmployee = new Employee("Bill", idTestValue, "bill@fakemail.com");
        expect(newEmployee.id).toEqual(idTestValue);
    });
    // Test setting email of an employee
    it("can set an email as an object property for an Employee via constructor", () => {
        const emailTestValue = "bill@fakemail.com"    
        const newEmployee = new Employee("Bill", "95AA", emailTestValue);
        expect(newEmployee.email).toEqual(emailTestValue);
    });
     // Test getName() method on an employee object
     it("getName() method should return 'Bill'", () => {
        const getNameTestValue = "Bill"    
        const newEmployee = new Employee(getNameTestValue, "95AA", "bill@fakemail.com");
        expect(newEmployee.getName()).toEqual(getNameTestValue);
    });
    // Test getID() method on an employee object
    it("getID() method should return '95AA'", () => {
        const getIDTestValue = "95AA"    
        const newEmployee = new Employee("Bill", getIDTestValue, "bill@fakemail.com");
        expect(newEmployee.getID()).toEqual(getIDTestValue);
    });
    // Test getEmail() method on an employee object
    it("getEmail() method should return 'bill@fakemail.com'", () => {
        const getEmailTestValue = "95AA"    
        const newEmployee = new Employee("Bill", "95AA", getEmailTestValue);
        expect(newEmployee.getEmail()).toEqual(getEmailTestValue);
    });
      // Test getRole() method on an employee object
    it("getRole() method should return 'Employee'", () => {
        const getRoleTestValue = "Employee"    
        const newEmployee = new Employee("Bill", "95AA", "bill@fakemail.com");
        expect(newEmployee.getRole()).toEqual(getRoleTestValue);
    });
});







