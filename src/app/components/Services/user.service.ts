import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserDetails(userEmail: string) {
    console.log('inside 1 userdetails');
    return this.http.get(`https://covidtriageblr.azurewebsites.net/user/getbyemail/${userEmail}`);
  }
}
