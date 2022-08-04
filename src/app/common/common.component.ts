import { Component, OnInit } from '@angular/core';
import { delay, of, takeUntil, tap } from 'rxjs';
import { DataService } from '../data.service';
import { UnsubscibeComponent } from '../unsubscibe/unsubscibe.component';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss']
})
export class CommonComponent extends UnsubscibeComponent implements OnInit {

  constructor(private service:DataService) {
    super();
   }

  override ngOnInit(): void {
    console.log(this.testProperty)
  }

  getUser(){
    of(true).pipe(
      delay(20000),
      tap(()=>{
        this.service.getUsers().pipe(takeUntil(this.destroySubscriptions)).subscribe(resp=>console.log(resp))
      })
    ).subscribe();
  }

  ngOnDestroy(){
    this.destroy();
    console.log(this.testProperty);
  }

}
