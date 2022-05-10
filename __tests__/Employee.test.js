const { isTypedArray } = require('util/types');
const { describe } = require('yargs');
const Employee = require('../lib/Employee');

describe("Initialization", () => {
    const employee = new Employee();


    expect (typeof employee).toBe("object");
});

it("should set name via constructor arguments", () => {
    const name = "Alice";

    const employee = new employee(name);

    expect(employee.name).toBe(name);
});
it("should set id via constructor arguments", () => {
    const id = 100

    const employee = new Employee("Alice", id);

    expect(employee.id).toBe(id);
});

it("should set email via constructor arguments", () => {
    const email = "test@test.com"

    const employee = new Employee ("Alice", 100, email);

    expect (employee.email).toBe(email);
});

describe("Getter methods", () => {
    it("should get name via getName()", () => {
        const name = "Alice";

        const employee = new Employee(name, 100, "test@test.com");
        const employeeName = employee.getName();

        expect(employeeName).toBe(name);
    });
    it("should get id via getID())", () => {
        const id = 100;

        const employee = new Employee("Alice", id, "test@test.com");
        const employeeId = employee.getId();

        expect(employeeId).toBe(id);

    });
    it("should get email via getEmail()", () => {
        const email = "test@test.com";

        const employee = new Employee("Alice", 100, email);
        const employeeEmail = employee.getEmail();

        expect(employeeEmail).toBe(email);
    });
    
    it("should get role via getRole()", () => {
        const role = "Employee";

        const employee = new Employee("Alice", 100, "test@test.com");
        const employeeRole = employee.getRole();

        expect(employeeRole).toBe(Role);
    })
})