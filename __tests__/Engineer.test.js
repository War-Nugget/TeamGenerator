const manager = require('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should set github via constructor arguments", () =>{

            const github = 'War-Nugget';

            const employee = new Engineer("Alice", 1, "test@test.com", github);
            
            expect(engineer.github).toBe(github)
        })

        describe("Getter methods", () => {
            it("should get github via getGithub()", () => {
                
                const github = 'War-Nugget';

                const employee = new Engineer("Alice", 1, "test@test.com", github);
                const engineerGithub = engineer.getGithub();

                expect(engineer.github).toBe(github)
            });
            
            it("should get role via getRole()", () => {
                const role = "Engineer";

                const engineer = new Engineer("Alice", 100, "War-Nugget");
                const engineerRole = engineer.getRole();

                expect(engineerRole).toBe(role);
            });
        });
    }); 
});