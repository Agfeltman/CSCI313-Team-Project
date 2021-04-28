import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {POSTS} from '../post-data/post-data'; //Temporary data set for testing


@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = POSTS;
  //Get posts from database and store them in an array here.

  constructor() { }


  addPost(newPost: Post){
    newPost.id = this.posts.length+1;
    this.posts.push(newPost);
  }

  deletePost(postIndex: number){
    this.posts.splice(postIndex,1);
  }

}
