import { Component } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-unsubscribe-observable',
  templateUrl: './unsubscribe-observable.component.html',
  styleUrls: ['./unsubscribe-observable.component.css']
})
export class UnsubscribeObservableComponent {

  observableSubscription:Subscription;
  observableSubscription1:Subscription;
  constructor(){
    // const observerbaleInstance = interval(1000);
    const observerbaleInstance = new Observable<number>((observer)=>{
      let i = 0;
     let interval = setInterval(()=>{
        console.log("interval running")
        observer.next(i++)
      },1000);

      return ()=>{
        console.log("cleanup function")
        clearInterval(interval);
        console.log("interval destroyed")
      }
    });

    this.observableSubscription =  observerbaleInstance.subscribe((data)=>{
      console.log(data)
    })

    this.observableSubscription1 =  observerbaleInstance.subscribe((data)=>{
      console.log(data)
    })

    this.observableSubscription.add(this.observableSubscription1)
    // this.observableSubscription.remove(this.observableSubscription1)
    // observerbaleInstance.subscribe((data)=>{
    //   console.log(data)
    // })
  }

  unsubscribe(){
    this.observableSubscription.unsubscribe();
  }
}
