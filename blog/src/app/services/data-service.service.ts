import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";


@Injectable()
export class DataService {

  private url = "https://jsonplaceholder.typicode.com";

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(this.url + '/api/posts')
      .pipe(
        map( (x: any[]) => x.slice(0, 5))
      );
  }


}
