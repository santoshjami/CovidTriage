import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserDetails(userEmail: string) {
    return this.http.get(`https://covidtriageblr.azurewebsites.net/user/getbyemail/${userEmail}`);
  }

  saveUserData(data: any) {
    return this.http.post(`https://covidtriageblr.azurewebsites.net/user`,data);
  }
}
