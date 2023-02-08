import { CalculatorService } from "./calculator.service"

describe("Calculator Service test suit", () => {


  it("should add two number", () => {
    let calculator = new CalculatorService();
    let result = calculator.add(1, 2);
    expect(result).toBe(3)
  })
})