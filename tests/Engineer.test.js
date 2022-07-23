const Employee = require('../lib/Employee');
 const Engineer = require('../lib/Engineer');

describe('Employee', () =>{
    it('Can it start Employee questions', ()=> {
        const emp = new Engineer();
        expect(typeof(emp)).toBe('object')

    });
    it('set a name based on what the user inputs', () => {
        const name = 'David'
        const emp = new Engineer(name);
        expect(emp.name).toBe(name);
    });
    it('set the id of the employee with the user input', () => {
        const testValue = 15;
        const emp = new Engineer('David', testValue);
        expect(emp.id).toBe(testValue);
    });
    it('set the email with the user input', () => {
        const testValue = 'me@me.com'
        const emp = new Engineer('David',1, testValue)
        expect(emp.email).toBe(testValue);
    });
    it('set the github userName with the user input', () => {
        const testValue = 'aanglin'
        const emp = new Engineer('David',1,'me@me.com', testValue)
        expect(emp.github).toBe(testValue);
    })
        it('can get name from function called', () => {
        const testValue = 'David';
        const emp = new Engineer(testValue);
        expect(emp.getName()).toBe(testValue);
    });
    it('can get id from function called', () => {
        const testValue = 15;
        const emp = new Engineer('David',testValue);
        expect(emp.getId()).toBe(testValue);
    });
    it('can get email from function called', () => {
        const testValue = 'me@me.com';
        const emp = new Engineer('David',1,testValue);
        expect(emp.getEmail()).toBe(testValue);
    });
    it('can get name from function called', () => {
        const testValue = 'aanglin';
        const emp = new Engineer('David',1,'me@me.com',testValue);
        expect(emp.getGithub()).toBe(testValue);
    });
        it('can get Role from function called', () => {
        const testValue = 'Engineer';
        const emp = new Engineer('David',1,'me@me.com', testValue);
        expect(emp.getRole()).toBe(testValue);
    });

})