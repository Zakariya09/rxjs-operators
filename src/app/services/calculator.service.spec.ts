import { CalculatorService } from "./calculator.service"
import { LoggerService } from "./logger.service";

describe("Calculator Service test suit", () => {


  it("should add two number", () => {
    let logService = new LoggerService();

    //to mock service i.e creating dummy instance of service
    let mockService = jasmine.createSpyObj('LoggerService', ['log']);

    //to make it call by number of time defined in havebeencall times
    // spyOn(logService, 'log').and.callThrough();

    //Spying Log service to not make any call to the functions defined inside it.
    // spyOn(logService, 'log')
    
    let calculator = new CalculatorService(mockService);
    let result = calculator.add(1, 2);
    expect(result).toBe(3)
    //alowing to visit the log function at once only
    expect(mockService.log).toHaveBeenCalledTimes(1);
  })

  //using xit can disable test
  it("should substract two number", () => {
    let logService = new LoggerService();
    spyOn(logService, 'log')
    let calculator = new CalculatorService(logService);
    let result = calculator.substract(1, 2);
    expect(result).toBe(3)
    expect(logService.log).toHaveBeenCalledTimes(1);
  })
})