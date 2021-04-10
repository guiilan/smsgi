import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Create, ListUsers, ResCreate, ListUser, ResUpdate, Update } from './user.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "https://reqres.in/api/users"

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<ListUsers> {
    return this.http.get<ListUsers>(this.url)
  }
  createSingleUser(request: Create): Observable<ResCreate> {
    return this.http.post<ResCreate>(this.url, request)
  }

  getUser(id:string): Observable<ListUser> {
    const _url=`${this.url}/${id}`
    return this.http.get<ListUser>(_url)
  }

  updateUser(id: string, request: Update): Observable<ResUpdate>{
    const _url=`${this.url}/${id}`
    return this.http.put<ResUpdate>(_url, request)
  }

  deleteUser(id: string): Observable<any>{
    const _url=`${this.url}/${id}`
    return this.http.delete<any>(_url)
  }
}
