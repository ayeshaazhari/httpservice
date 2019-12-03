import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  private myURL = 'http://jsonplaceholder.typicode.com/posts';
  constructor(private http:HttpClient) { }

  getPost() {
   return  this.http.get(this.myURL);
  }

  createPost(newPost) { 
    return this.http.post(this.myURL,newPost);
  }

  updateExistingPost(updatePost){
    this.http.put(this.myURL + "/"  + updatePost.id,updatePost);
  }

  deleteExistingPost(deletePost) { 
    return this.http.delete(this.myURL + "/" + deletePost.id);
  }

}
