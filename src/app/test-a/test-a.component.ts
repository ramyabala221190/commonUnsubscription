import { Component, OnInit } from '@angular/core';
import { Subscription, takeUntil } from 'rxjs';
import { DataService } from '../data.service';
import { UnsubscibeComponent } from '../unsubscibe/unsubscibe.component';

@Component({
  selector: 'app-test-a',
  templateUrl: './test-a.component.html',
  styleUrls: ['./test-a.component.scss']
})
export class TestAComponent extends UnsubscibeComponent implements OnInit {

  public subscription:Subscription[]=[]


  constructor(private service:DataService) {
    super();
  }

  override ngOnInit(): void {
    console.log(this.testProperty);
  }

  getPost(){
    const subs=this.service.getPosts().pipe(takeUntil(this.destroySubscriptions)).subscribe(resp=>console.log(resp))
    this.subscription.push(subs)
  }

  ngOnDestroy(){
    this.destroy();
    console.log(this.testProperty);
    console.log(this.subscription);
  }

}
