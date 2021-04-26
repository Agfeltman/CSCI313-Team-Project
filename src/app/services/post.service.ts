import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  posts: Post[] = [];
  //Get posts from database and store them in an array here.

  constructor() { }
}
