const Employee = require('../lib/Employee');
 const Manager = require('../lib/Manager');

describe('Employee', () =>{
    it('Can it start Employee questions', ()=> {
        const emp = new Manager();
        expect(typeof(emp)).toBe('object')

    });
    it('set a name based on what the user inputs', () => {
        const name = 'David'
        const emp = new Manager(name);
        expect(emp.name).toBe(name);
    });
    it('set the id of the employee with the user input', () => {
        const testValue = 15;
        const emp = new Manager('David', testValue);
        expect(emp.id).toBe(testValue);
    });
    it('set the email with the user input', () => {
        const testValue = 'me@me.com'
        const emp = new Manager('David',1, testValue)
        expect(emp.email).toBe(testValue);
    });
    it('set the officeNumber with the user input', () => {
        const testValue = '245'
        const emp = new Manager('David',1,'me@me.com', testValue)
        expect(emp.officeNumber).toBe(testValue);
    })
        it('can get name from function called', () => {
        const testValue = 'David';
        const emp = new Manager(testValue);
        expect(emp.getName()).toBe(testValue);
    });
    it('can get id from function called', () => {
        const testValue = 15;
        const emp = new Manager('David',testValue);
        expect(emp.getId()).toBe(testValue);
    });
    it('can get email from function called', () => {
        const testValue = 'me@me.com';
        const emp = new Manager('David',1,testValue);
        expect(emp.getEmail()).toBe(testValue);
    });
    it('can get officeNumber from function called', () => {
        const testValue = 245;
        const emp = new Manager('David',1,'me@me.com',testValue);
        expect(emp.getOfficeNumber()).toBe(testValue);
    });
    it('can get Role from function called', () => {
        const testValue = 'Manager';
        const emp = new Manager('David',1,'me@me.com',214);
        expect(emp.getRole()).toBe(testValue);
    });

})