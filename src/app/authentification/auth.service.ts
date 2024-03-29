import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl="http://localhost:5000/api/users"
constructor(private http: HttpClient, public router: Router) { }

// Sign-up
signUp(user: User): Observable<any> {
return this.http.post(this.baseurl + '/', user);
}
// Sign-in
signIn(user: any) {
return this.http
.post<any>(this.baseurl + "/login/" , user)
.subscribe({
next: (res:any) => {
localStorage.setItem('access_token', res.token);
},
error: (e:any) => {
console.log(e);
alert("Error !")
},
complete: () => {
this.router.navigate(['livres']);
}
});
}
getToken() {
return localStorage.getItem('access_token');
}
get isLoggedIn(): boolean {
let authToken = localStorage.getItem('access_token');
return authToken !== null ? true : false;
}
doLogout() {
let removeToken = localStorage.removeItem('access_token');
if (removeToken == null) {

3
this.router.navigate(['login']);
}
}
}
