import { AfterViewInit, Component, OnInit } from '@angular/core';
import { audit, buffer, bufferCount, bufferTime, bufferToggle, bufferWhen, catchError, concatMap, debounce, delay, distinct, distinctUntilChanged, distinctUntilKeyChanged, elementAt, exhaustMap, filter, first, from, fromEvent, ignoreElements, interval, last, map, Observable, of, retry, retryWhen, sample, single, skip, skipLast, skipUntil, skipWhile, switchMap, take, takeLast, takeUntil, takeWhile, tap, throttle } from 'rxjs';
import { ajax } from "rxjs/ajax"
@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.css']
})
export class OperatorsComponent implements OnInit, AfterViewInit {
  numberArr: number[] = [];
  clickObservable!: Observable<Event>
  debounceObservable!: Observable<Event>

  constructor() {

  }

  ngOnInit(): void {
    const observableInstance = interval(1000);

    //pipable operators
    // observableInstance.pipe(
    //   filter((number) => {
    //     return number % 2 === 0;
    //   }),
    //   map((item) => {
    //     return `Even number ${item}`
    //   })
    // ).subscribe(number => {
    //   console.log(number)
    // })

    //buffer count demo
    // observableInstance.pipe(bufferCount(3, 5)).subscribe((number) => {
    //   console.log(number)
    // })

    //buffer time demo
    // observableInstance.pipe(bufferTime(3000)).subscribe((number) => {
    //   console.log(number)
    // })

    //buffer toggle demo
    // let opening = interval(6000).pipe(tap(() => { console.log("open") }));
    // let closing = () => interval(3000).pipe(tap(() => { console.log("close") }));;
    // observableInstance
    //   .pipe(
    //     tap((data) => { console.log(data) }),
    //     bufferToggle(opening, closing),
    //     take(3))
    //   .subscribe((number) => {
    //     console.log(number)
    //   })


    //bufferWhen demo
    // let x = 0;
    // observableInstance.pipe(
    //   tap((i) => x = i),
    //   bufferWhen(() => {
    //     if (x > 5) {
    //       return interval(1000)
    //     }
    //     return interval(2000)
    //   }), take(5)).subscribe((number) => {
    //     console.log(number)
    //   })


    //take and takeLast demo
    // observableInstance.pipe(
    //   take(3),
    //   takeLast(5)
    // ).subscribe((data) => {
    //   console.log(data)
    // },
    //   (error) => {
    //     console.log(error)
    //   },
    //   () => {
    //     console.log("completed")
    //   })

    // TakeWhile demo
    // observableInstance.pipe(
    //   takeWhile(x => x < 5, false)
    // ).subscribe((data) => {
    //   console.log(data)
    // },
    //   (error) => {
    //     console.log(error)
    //   },
    //   () => {
    //     console.log("take while completed")
    //   })

    //Skip Operator
    // observableInstance.pipe(skip(3))
    //   .subscribe((data) => {
    //     console.log(data)
    //   },
    //     (err) => {
    //       console.log(err)
    //     })

    //SkipLast Operator
    // of(1,12,2,3,3,2,2).pipe(skipLast(3))
    //   .subscribe((data) => {
    //     console.log(data)
    //   })

    //SkipWhile Operator
    // observableInstance.pipe(skipWhile(value => value < 5))
    //   .subscribe((data) => {
    //     console.log(data)
    //   })

    //Distinct demo
    // of(1, 2, 3, 4, 5, 1, 2, 3).pipe(distinct())
    //   .subscribe((data) => {
    //     console.log(data)
    //   });

    // const employees = [
    //   { id: 1, name: "Zakariya Khan" },
    //   { id: 2, name: "Ashfaque Khan" },
    //   { id: 2, name: "Zakariya Khan" },
    // ];

    // from(employees).pipe(distinct((emp) => emp.name)).subscribe((data) => {
    //   console.log(data)
    // })

    //Distinct untill Change
    // of(1, 2, 2, 3).pipe(distinctUntilChanged())
    //   .subscribe((data) => {
    //     console.log(data)
    //   });

    // const employees = [
    //   { id: 1, name: "Zakariya Khan" },
    //   { id: 2, name: "Zakariya Khan" },
    //   { id: 2, name: "Ashfaque Khan" },
    // ];

    // from(employees).pipe(distinctUntilChanged(
    //   (prev, current) => {
    //     return prev === current;
    //   },
    //   (x) => x.id
    // ))
    //   .subscribe((data) => {
    //     console.log(data)
    //   });

    //Distinct Until Changed 
    // const employees = [
    //   { id: 1, name: "Zakariya Khan" },
    //   { id: 2, name: "Zakariya Khan" },
    //   { id: 2, name: "Ashfaque Khan" },
    // ];

    // from(employees).pipe(distinctUntilKeyChanged('name')).subscribe(data=>{
    //   console.log(data)
    // }) 
    // from(employees).pipe(distinctUntilKeyChanged('name', (prev, next)=>{
    //   return prev === next
    // })).subscribe(data=>{
    //   console.log(data)
    // })

    //Filter Operator Demo
    // of(1, 2, 3, 4).pipe(filter(data => {
    //   return data < 3;
    // })).subscribe(data => {
    //   console.log(data)
    // });

    // fromEvent(document,'click').pipe(
    //   filter((event: Event) => {
    //   return (event.target as HTMLElement).tagName === 'A';
    // })).subscribe(data=>{
    //   console.log(data)
    // })

    //Sample Operator demo
    // let k = fromEvent(document, 'click')
    // interval(500)
    //   .pipe(sample(k)).subscribe(data => {
    //     console.log(data)
    //   })

    //Audit Operator example
    // interval(1000).pipe(audit((val) => {
    //   return interval(2000);
    // }))
    //   .subscribe((data) => {
    //     console.log(data)
    //   })

    // throttle Operator Demo
    // interval(1000)
    //   .pipe(
    //     throttle((data) => interval(2000), { leading: false, trailing: false })
    //   )
    //   .subscribe((data)=>{
    //     console.log(data)
    //   })

    //First Operator Example
    // of(1, 2, 3, 4, 5).pipe(first()).subscribe((data) => {
    //   console.log(data)
    // },
    //   (error) => { console.log(error) },
    //   () => { console.log("Completed") }
    // )

    //First Opeartor produces error if conditions not matching
    // of(1, 2, 3, 4, 5).pipe(first((data) => data > 10)).subscribe((data) => {
    //   console.log(data)
    // },
    //   (error) => { console.log(error) },
    //   () => { console.log("Completed") }
    // )

    // //First Opeartor Default value set if condition not matching
    // of(1, 2, 3, 4, 5).pipe(first((data) => data > 10, 11)).subscribe((data) => {
    //   console.log(data)
    // },
    //   (error) => { console.log(error) },
    //   () => { console.log("Completed") })

    //Last Operator Demo functions same as first operator
    // of(1, 2, 3, 4, 5).pipe(last()).subscribe((data) => {
    //   console.log(data)
    // },
    //   (error) => { console.log(error) },
    //   () => { console.log("Completed") }
    // )

    //ElementAt Operator // retrun the value at location or default value
    // of(1, 2, 3, 4, 5).pipe(elementAt(4, 24)).subscribe((data) => {
    //   console.log(data)
    // })

    //IgnoreElements ignores all data stream and execute complete block after data stream
    // interval(1000).pipe(take(5), ignoreElements()).subscribe(() => { },
    //   () => { },
    //   () => { console.log("complete") })

    //single operator returns single value only add predicate to get filtered value
    // of(1,2).pipe(
    //   single((data) => {
    //     return data % 2 === 0;
    //   }))
    //   .subscribe((data) => {
    //     console.log(data)
    //   },
    //     (error) => { console.log(error) },
    //     () => { console.log("Complete") })


    //merge map exceute all observables in aprallel regardless the sequence.
    // of(1, 2, 3, 4, 5).pipe(concatMap(id => {
    //   return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(map((data) => data.response))
    // })).subscribe((data) => {
    //   console.log("data")
    //   console.log(data)
    // });

    //concat map exceute one after another in sequence
    // of(1, 2, 3, 4, 5).pipe(concatMap(id => {
    //   return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(map((data) => data.response))
    // })).subscribe((data) => {
    //   console.log("data")
    //   console.log(data)
    // });

    //exhaust map - wait untill execute the existing and ignore all upcoming data.
    // of(1, 2, 3, 4, 5).pipe(exhaustMap(id => { // after completion of first executes for current one.
    //   return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(map((data) => data.response))
    // })).subscribe((data) => {
    //   console.log("data")
    //   console.log(data)
    // });

    //exhaust map example 2
    // interval(100).pipe(
    //   filter((id) => id > 0),
    //   tap((id) => console.log(id)),
    //   exhaustMap(id => { // after completion of first executes for current one.
    //     return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //       .pipe(map((data) => data.response))
    //   }),
    //   take(5)).subscribe((data) => {
    //     console.log("data")
    //     console.log(data)
    //   });


    //Switch Map demo - It Switches to most recent input data
    // interval(600).pipe(
    //   filter((id) => id > 0),
    //   tap((id) => console.log(id)),
    //   switchMap(id => {
    //     return ajax(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //       .pipe(map((data) => data.response))
    //   }),
    //   take(5)).subscribe((data) => {
    //     console.log("data")
    //     console.log(data)
    //   });

    //catchError Demo - if you add caught it will execute inifinite time without error.
    //caught rerun the source observable
    // let source = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.error("error occured")
    // });

    // source.pipe(catchError((error, caught) => {
    //   // return of(1, 2, 3)
    //   // throw  error;
    //   return caught;
    // }),
    //   take(5)
    // ).subscribe((data) => {
    //   console.log(data);
    // })


    //retry Demo - if you pass value it will retry thr number of times if you dont then it will infinite time retry.
    //it executes only when error occured in source observable
    // let source = new Observable((observer) => {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.error("error occured")
    // });

    // source.pipe(retry(2)).subscribe((data) => {
    //   console.log(data);
    // })

    //retryWhen demo
    let response = {
      status: '500',
      data: [
        { name: 'Zakariya Khan', id: 1 },
        { name: 'Mohammad Khan', id: 2 },
      ]
    };

    of(...response?.data).pipe(
      tap((user) => {
        if (!response?.status.startsWith('2')) {
          throw response?.status;
        }
      }),
      retryWhen((error) => {
        return error.pipe(
          tap((status) => {
          if (status.startsWith('5')) {
            throw 'error'
          }
          console.log('retrying...')
        }))
      })
    ).subscribe({
      next: (data) => {
        console.log(data)
      },
      error: (error) => {
        console.log(error)
      }
    })


    setTimeout(() => {
      let status = Math.random();
      if (status < 0.5) {
        response.status = '200'
      } else {
        response.status = '400'
      }
    }, 5000)


  }

  //capturing click event using fromEvent 
  ngAfterViewInit(): void {
    this.clickObservable = fromEvent(document.querySelector("#btn")!, 'click');
    this.debounceObservable = fromEvent(document.querySelector("#debounce")!, 'click');

    //Debouncing Operator
    this.debounceObservable.pipe(debounce(value => interval(2000))).subscribe((data) => {
      console.log(data)
    })

    //SkipUntil
    interval(1000).pipe(skipUntil(this.clickObservable))
      .subscribe((number) => {
        this.numberArr.push(number)
        console.log(number)
      })
  }

  //buffer operator 
  setInterval() {
    interval(1000)
      .pipe(buffer(this.clickObservable))
      .subscribe((data: number[]) => {
        this.numberArr.push(...data);
        console.log(data)
      })

  }

  //takeUntilDemo
  startTakeUntil() {
    interval(1000).pipe(
      takeUntil(this.clickObservable)
    ).subscribe((data) => {
      console.log(data)
    })
  }

}
