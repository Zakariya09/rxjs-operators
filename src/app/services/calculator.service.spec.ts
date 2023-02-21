import { CalculatorService } from "./calculator.service"
import { LoggerService } from "./logger.service";
import { TestBed } from '@angular/core/testing'

describe("Calculator Service test suit", () => {
  let mockService: any;
  let calculator: CalculatorService;

  let loggerService: jasmine.SpyObj<LoggerService>;

  beforeEach(() => {
    //to mock service i.e creating dummy instance of service
    mockService = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [CalculatorService,
        {
          provide: LoggerService,
          useValue: mockService
        }]
    });
    calculator = TestBed.inject(CalculatorService);

    //we can create instance of dependent service or child service
    loggerService = TestBed.inject(LoggerService) as jasmine.SpyObj<LoggerService>;
  });

  it("should add two number", () => {

    //to make it call by number of time defined in havebeencall times
    // spyOn(logService, 'log').and.callThrough();

    //Spying Log service to not make any call to the functions defined inside it.
    // spyOn(logService, 'log')

    let result = calculator.add(1, 2);
    expect(result).toBe(3)
    //alowing to visit the log function at once only
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  })

  //using xit can disable test
  it("should substract two number", () => {
    let result = calculator.substract(2, 1);
    expect(result).toBe(1)
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  })
})