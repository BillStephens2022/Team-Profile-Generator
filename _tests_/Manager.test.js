// Import Manager class with require()

const Manager = require("../lib/manager");

// Test setting school for Manager
describe("Manager", () => {
    // Test office number setting for Manager object
    it("can set an office number as an object property via constructor", () => {
        const officeNumberTestValue = "11A";
        const newManager = new Manager("Bill", "95AA", "bill@fakemail.com", officeNumberTestValue);
        expect(newManager.officeNumber).toEqual(officeNumberTestValue);
    });
    // Test getRole() method on Manager object
    it("getRole() method should return 'Intern'", () => {
        const getRoleTestValue = "Manager"    
        const newManager = new Manager("Bill", "95AA", "bill@fakemail.com", "11A");
        expect(newManager.getRole()).toEqual(getRoleTestValue);
    });
    // Test getSchool() method on Manager object
    it("getOffice() method should return the Manager's office number", () => {
        const getOfficeTestValue = "11A"    
        const newManager = new Manager("Bill", "95AA", "bill@fakemail.com", getOfficeTestValue);
        expect(newManager.getOffice()).toEqual(getOfficeTestValue);
    });
});