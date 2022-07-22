const Employee = require('../lib/Employee');
 const Intern = require('../lib/Intern');

describe('Employee', () =>{
    it('Can it start Employee questions', ()=> {
        const emp = new Employee();
        expect(typeof(emp)).toBe('object')

    });
    it('set a name based on what the user inputs', () => {
        const name = 'David'
        const emp = new Employee(name);
        expect(emp.name).toBe(name);
    });
    it('set the id of the employee with the user input', () => {
        const testValue = 15;
        const emp = new Employee('David', testValue);
        expect(emp.id).toBe(testValue);
    });
    it('set the email with the user input', () => {
        const testValue = 'me@me.com'
        const emp = new Employee('David', testValue)
        expect(emp.email).toBe(testValue);
    });
    it('set the school with the user input', () => {
        const testValue = 'Delgado'
        const emp = new Employee('David', testValue)
        expect(emp.email).toBe(testValue);
    })
        it('can get name from function called', () => {
        const testValue = 'David';
        const emp = new Employee(testValue);
        expect(emp.getName()).toBe(testValue);
    });
    it('can get id from function called', () => {
        const testValue = 15;
        const emp = new Employee(testValue);
        expect(emp.getId()).toBe(testValue);
    });
    it('can get email from function called', () => {
        const testValue = 'me@me.com';
        const emp = new Employee(testValue);
        expect(emp.getEmail()).toBe(testValue);
    });
    it('can get school from function called', () => {
        const testValue = 'Delgado';
        const emp = new Employee(testValue);
        expect(emp.getSchool()).toBe(testValue);
    })
    it('can get Role from function called', () => {
        const testValue = 'David';
        const emp = new Employee(testValue);
        expect(emp.getRole()).toBe(testValue);
    });

})