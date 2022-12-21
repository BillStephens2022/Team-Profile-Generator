// // Import Engineer class with require()
const Engineer = require("../lib/engineer");

// Test setting github account
describe("Engineer", () => {   
    // test setting for Github account on Engineer object
    it("can set a Github account as an object property via constructor", () => {
        const githubTestValue = "BillGithubAccount"    
        const newEngineer = new Engineer("Bill", "95AA", "bill@fakemail.com", githubTestValue);
        expect(newEngineer.github).toEqual(githubTestValue);
    });
    // test getRole() method on Engineer object
    it("getRole() method should return 'Engineer", () => {
        const getRoleTestValue = "Engineer"    
        const newEngineer = new Engineer("Bill", "95AA", "bill@fakemail.com", "BillGithub");
        expect(newEngineer.getRole()).toEqual(getRoleTestValue);
    });
    // test getGithub() method on Engineer object
    it("getGithub() method should return Github username", () => {
        const getGithubTestValue = "BillGithub"    
        const newEngineer = new Engineer("Bill", "95AA", "bill@fakemail.com", getGithubTestValue);
        expect(newEngineer.getGithub()).toEqual(getGithubTestValue);
    });
});


  