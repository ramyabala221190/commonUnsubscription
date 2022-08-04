import { Component, OnInit } from '@angular/core';
import { Subscription, takeUntil } from 'rxjs';
import { DataService } from '../data.service';
import { UnsubscibeComponent } from '../unsubscibe/unsubscibe.component';

@Component({
  selector: 'app-test-b',
  templateUrl: './test-b.component.html',
  styleUrls: ['./test-b.component.scss']
})
export class TestBComponent extends UnsubscibeComponent implements OnInit {

  public subscription:Subscription[]=[]

  constructor(private service:DataService) {
    super()
   }

  override ngOnInit(): void {
    console.log(this.testProperty)
  }

  getToDo(){
    const subs=this.service.getToDos().pipe(takeUntil(this.destroySubscriptions)).subscribe(resp=>console.log(resp))
    this.subscription.push(subs);
  }

  ngOnDestroy(){
    this.destroy();
    console.log(this.testProperty);
    console.log(this.subscription);
  }

}
