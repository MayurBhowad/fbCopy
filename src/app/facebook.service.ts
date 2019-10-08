import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  url = 'http://localhost:5000/user/';

  constructor(private http: HttpClient) { }
}
