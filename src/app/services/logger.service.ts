import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  logs: string[] = [];

  log(message: string) {
    debugger;
    this.logs.push(message);
  }
}
