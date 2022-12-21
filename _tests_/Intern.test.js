// Import Intern class with require()
const Intern = require("../lib/intern");


describe("Intern", () => {
    // Test school setting on Intern object   
    it("can set a school as an object property via constructor", () => {
        const schoolTestValue = "Rutgers";
        const newIntern = new Intern("Bill", "95AA", "bill@fakemail.com", schoolTestValue);
        expect(newIntern.school).toEqual(schoolTestValue);
    });
    // Test getRole() method on Intern object
    it("getRole() method should return 'Intern'", () => {
        const getRoleTestValue = "Intern"    
        const newIntern = new Intern("Bill", "95AA", "bill@fakemail.com", "Rutgers");
        expect(newIntern.getRole()).toEqual(getRoleTestValue);
    });
    // Test getSchool() method on Intern object
    it("getSchool() method should return the Intern's school name", () => {
        const getSchoolTestValue = "Rutgers"    
        const newIntern = new Intern("Bill", "95AA", "bill@fakemail.com", getSchoolTestValue);
        expect(newIntern.getSchool()).toEqual(getSchoolTestValue);
    });
});