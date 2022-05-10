const manager = require('../lib/Manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("should set office number via constructor arguments", () =>{

            const officeNumber = 100;

            const employee = new manager("Alice", 1, "test@test.com", officeNumber);
            
            expect(employee.officeNumber).toBe(officeNumber)
        })

        describe("Getter methods", () => {
            it("should get office number via getOffice()", () => {
                
                const officeNumber = 100;
            
                const employee = new manager("Alice", 1, "test@test.com", officeNumber);
                const managerOfficeNumber = manager.getOffice();

                expect(employee.officeNumber).toBe(officeNumber)
            });
            
            it("should get role via getRole()", () => {
                const role = "Manager";

                const Manager = new Manager("Alice", 100, "test@test.com");
                const ManagerRole = Manager.getRole();

                expect(ManagerRole).toBe(role);
            });
        });
    }); 
});