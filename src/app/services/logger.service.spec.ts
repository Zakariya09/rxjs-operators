import { LoggerService } from "./logger.service"

describe("Logger Service Test Cases", () => {
  let logService: LoggerService;
  beforeEach(() => {
    logService = new LoggerService();
  });

  it("should be blank on initialization", () => {
    expect(logService.logs.length).toBe(0)
  });

  it("should push message to logs", () => {
    logService.log('log for api');
    expect(logService?.logs?.length).toBe(1)
  });

  it("should blank the logs after clear", () => {
    logService.log('test log ');
    logService.clear();
    expect(logService.logs?.length).toBe(0);
  })
})