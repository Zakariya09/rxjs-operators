describe("first test case", () => {
    let testVariable: any;
    beforeEach(() => {
        testVariable = {}
    });

    it("should return true if true", () => {

        //arrange 
        testVariable.a = false;

        //act
        testVariable.a = true

        //assert
        expect(testVariable.a).toBe(true)        
    });
});

