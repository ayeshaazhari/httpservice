import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {
  private myURL = 'https://api.github.com/users/devendradora/followers';

  constructor(private http:HttpClient) { }

  getfollower() {
    return  this.http.get(this.myURL);
   }
}
