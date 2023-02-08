import { AfterViewInit, Component, OnInit } from '@angular/core';
import { bufferCount, from, fromEvent, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {
  title = 'RXJS Practice App';
  userArr = [
    { name: "Zakariya", surname: "Khan" },
    { name: "Shadab", surname: "Alam" },
    { name: "Ashfaque", surname: "Khan" },
  ];
  arrObservable$ = from(this.userArr)

  constructor() {
    //converting array into observables
    this.arrObservable$.pipe(bufferCount(2)).subscribe({
      // next: (data) => { console.log("data", data) },
      // error: (error) => { console.log("error", error) },
      // complete: () => { console.log("observable completed") }
    })

    //creating ustom observables
    const observ = new Observable<string>((observer)=>{
      observer.next("from observable")
    });

    observ.subscribe((item)=>{
      console.log("item", item)
    })
  }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {
    //converting event into observable
    // fromEvent(document.querySelector("#addData")!, 'click').subscribe({
    //   next: (data) => { console.log("error", data) },
    //   error: (error) => { console.log("error", error) },
    //   complete: () => { console.log("event observable completed") }
    // })
  }


}
