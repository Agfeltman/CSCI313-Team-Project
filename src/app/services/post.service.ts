import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {POSTS} from '../post-data/post-data'; //Temporary data set for testing
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import { Key } from 'selenium-webdriver';
import {ViewComponent} from '../post/view/view.component';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  map = new Map<number, string>();
  posts: Post[] = [];
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
    let postKey = this.map.get(id!);
    return this.http.delete(this.db + "post/"+postKey +".json");
    
  }

  getPost(newId: number){
      console.log("Fetching Post");
      let postKey = this.map.get(newId);
    return this.http.get(this.db + "post/" + postKey + ".json");
  }

  updatePost(post: Post){
    //TODO Add functionality to add comments to database
    let postKey = this.map.get(post.id!);
    return this.http.put(this.db + "post/" + postKey + ".json",post);
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
            this.map.set(data[key].id!, key);
          }
          this.posts = newPosts;
          return newPosts
        })
      );
  }



}
