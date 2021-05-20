import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../models';
import { map } from "rxjs/operators";
import { UserModel } from '../models/user-model';
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private url: string;
  constructor(private http: HttpClient) {
    this.url  = 'https://reqres.in/api/users?page=2';
  }

  public cargarUsuarios() {
    return this.http.get<IResponse>(this.url)
    .pipe(
      map( resp => {
        return resp.data.
        map(user => {
          return UserModel.userFromJson(user);
        }
        )
      }
      )
    );
  }
}
