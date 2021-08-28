import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http : HttpClient) { }

  userLogin(credential){
    return this.http.post(`${environment.apiUrl}/v1/user/login`,credential);
  }
  userSignup(newCredential){
    return this.http.post(`${environment.apiUrl}/v1/user/signup`,newCredential);
  }
}
