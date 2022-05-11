const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should set school via constructor arguments", () =>{

            const school = 'Georgia-Tech';

            const intern = new Intern("Alice", 1, "test@test.com", school);
            
            expect(intern.school).toBe(school)
        })

        describe("Getter methods", () => {
            it("should get school via getSchool()", () => {
                
                const school = 'GeorgiaTech';

                const intern = new Intern("Alice", 1, "test@test.com", school);
                const internSchool = intern.getSchool();

                expect(internSchool).toBe(school)
            });
            
            it("should get role via getSchool()", () => {
                const role = "Intern";

                const intern = new Intern("Alice", 100, "GeorgiaTech");
                const internRole = intern.getRole();

                expect(internRole).toBe(role);
            });
        });
    }); 
});