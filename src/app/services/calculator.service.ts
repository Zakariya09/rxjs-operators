import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() { }

  add(fno: number, sno: number) {
    return fno + sno;
  }

  substract(fno: number, sno: number) {
    return fno + sno;
  }
}
