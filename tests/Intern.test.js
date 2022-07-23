const Employee = require('../lib/Employee');
 const Intern = require('../lib/Intern');

describe('Employee', () =>{
    it('Can it start Employee questions', ()=> {
        const emp = new Intern();
        expect(typeof(emp)).toBe('object')

    });
    it('set a name based on what the user inputs', () => {
        const name = 'David'
        const emp = new Intern(name);
        expect(emp.name).toBe(name);
    });
    it('set the id of the employee with the user input', () => {
        const testValue = 15;
        const emp = new Intern('David', testValue);
        expect(emp.id).toBe(testValue);
    });
    it('set the email with the user input', () => {
        const testValue = 'me@me.com'
        const emp = new Intern('David', 1,testValue)
        expect(emp.email).toBe(testValue);
    });
    it('set the school with the user input', () => {
        const testValue = 'Delgado'
        const emp = new Intern('David',1,'me@me.com',testValue)
        expect(emp.school).toBe(testValue);
    })
        it('can get name from function called', () => {
        const testValue = 'David';
        const emp = new Intern(testValue);
        expect(emp.getName()).toBe(testValue);
    });
    it('can get id from function called', () => {
        const testValue = 15;
        const emp = new Intern('David',testValue);
        expect(emp.getId()).toBe(testValue);
    });
    it('can get email from function called', () => {
        const testValue = 'me@me.com';
        const emp = new Intern('David',1,testValue);
        expect(emp.getEmail()).toBe(testValue);
    });
    it('can get school from function called', () => {
        const testValue = 'Delgado';
        const emp = new Intern('David',1,'me@me.com',testValue);
        expect(emp.getSchool()).toBe(testValue);
    })
    it('can get Role from function called', () => {
        const testValue = 'Intern';
        const emp = new Intern('David',1,'me@me.com','Delgado');
        expect(emp.getRole()).toBe(testValue);
    });

})