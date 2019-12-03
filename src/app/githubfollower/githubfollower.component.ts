import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from '../githubservice.service';

@Component({
  selector: 'app-githubfollower',
  templateUrl: './githubfollower.component.html',
  styleUrls: ['./githubfollower.component.css']
})
export class GithubfollowerComponent implements OnInit {
  followers;

  constructor(private service:GithubserviceService) { }

  ngOnInit() {
    this.service.getfollower().subscribe(res => {
      console.log(res);
      this.followers = res;
    })
  }

}
