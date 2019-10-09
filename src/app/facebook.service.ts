import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  url = 'http://localhost:5000/user/';

  constructor(private http: HttpClient) { }

  adduser(fname, lname, emailphone, reemailphone, password, gender, date) {
    const obj = {
      fname: fname,
      lname: lname,
      emailphone: emailphone,
      reemailphone: reemailphone,
      password: password,
      gender: gender,
      date: date
    };
    console.log(obj);
    this.http.post(`${this.url}/add`, obj).subscribe(res => console.log('DOne'));
  }
}
