import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor(private logService: LoggerService) { }

  add(fno: number, sno: number) {
    this.logService.log("addition performed");
    return fno + sno;
  }

  substract(fno: number, sno: number) {
    this.logService.log("substraction performed");
    return fno - sno;
  }
}
