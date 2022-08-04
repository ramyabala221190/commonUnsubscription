import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient:HttpClient) {
  }

  getUsers(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users/1').pipe(
      map(res=>res),
      catchError(err=>throwError(err))
      )
  }

  getPosts(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/posts/1').pipe(
      map(res=>res),
      catchError(err=>throwError(err))
      )
  }

  getToDos(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/1').pipe(
      map(res=>res),
      catchError(err=>throwError(err))
      )
  }
}
