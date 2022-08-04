import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

//ng g component unsubscibe --inlineTemplate=true --inlineStyle=true --skipTests=true

/*
Each component that extends this component has an independent instance of this component
and doesnt clash

*/

@Component({
  selector: 'app-unsubscibe',
  template: `
    <p>
      unsubscibe works!
    </p>
  `,
  styles: [
  ]
})
export class UnsubscibeComponent implements OnInit {

  constructor() { }

  public destroySubscriptions=new Subject<any>();
  public testProperty:number=100;

  ngOnInit(): void {
  }

  destroy(){
    this.testProperty=this.testProperty*100;
    this.destroySubscriptions.next(true);
    this.destroySubscriptions.complete();
  }

}
