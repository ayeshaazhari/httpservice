import { Component, OnInit } from '@angular/core';
import { HttpserviceService } from '../httpservice.service';

@Component({
  selector: 'app-appcomponent',
  templateUrl: './appcomponent.component.html',
  styleUrls: ['./appcomponent.component.css']
})
export class AppcomponentComponent implements OnInit {
  posts;
  post;
  updatepost;
  constructor(private service:HttpserviceService) { }

  ngOnInit() {
    this.service.getPost().subscribe(data => {
      console.log(data);
      this.posts = data;
    })
  }

  createPost(){
    let newPost = { title:this.post};
    console.log("Create Post Function");
    this.service.createPost(newPost).subscribe(response => {
      this.posts.splice(0,0,newPost);
    } ,
    error => {
      if(error.status == 404){
        alert("Pagefound");
      } else if(error.status == 405){
        alert("Forbidden");
      } else {
      alert("error");
      }
      console.log(error);

    })
  }

  updateData(post) {
    post.title = "new title";
    let updatepost = post;
    this.service.updateExistingPost(updatepost);
  }

  deleteData(post){
    console.log("Delete post of Id - > " + post.id);
    this.service.deleteExistingPost(post).subscribe(res => 
      {
        console.log("post deleted Succusfully" + this.posts.indexOf(post));
        let dPostIndex = this.posts.indexOf(post);
        this.posts.splice(dPostIndex,1);
      },
      error => {
        if(error.status == 404) {
          alert("page not found");
        } else if(error.status == 405) {
          alert("forbidden");
        } else {
          alert("alert");
        }
        console.log("Error : " + error);
      });
  }
}
