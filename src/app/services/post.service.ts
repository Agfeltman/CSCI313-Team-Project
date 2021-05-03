import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {POSTS} from '../post-data/post-data'; //Temporary data set for testing
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import { Key } from 'selenium-webdriver';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: Post[] = POSTS;
  numIds: number = POSTS.length+1;
  db:string = "https://csci313-team-project-default-rtdb.firebaseio.com/"
  //Get posts from database and store them in an array here.

  constructor(private http : HttpClient) { }


  addPost(newPost: Post){
    newPost.id = newPost.timestamp!.getTime(); 
    newPost.id += this.posts.length;
    console.log(newPost.title);
    return this.http.post(
      this.db + "post"+ ".json",
      newPost
    );
  }

  deletePost(postIndex: number){
    let id = this.posts[postIndex].id;
    this.posts.splice(postIndex,1);

    //This currently would delete the database
    //I don't know how to delete one entry
    return this.http.delete(this.db + "post.json");
    
  }

  getPost(newId: number){
      console.log("Fetching Posts");
      this.getPostData().subscribe(data => this.posts = data);
    return this.posts.find(p => p.id == newId);
  }

  addComment(comment: string){
    //TODO Add functionality to add comments to database
  }

  updateLikes(newLikes: number){
    //TODO Add functionality to set the number of likes to the database
  }

  
  getPostData() {
    return this.http
      .get<Post[]>(
        this.db +
          "post.json"
      )
      .pipe(
        map(data => {
          let newPosts: Post[] = [];

          for (let key in data) {
            newPosts.push(data[key]);
          }
          this.posts = newPosts;
          return newPosts
        })
      );
  }


}
