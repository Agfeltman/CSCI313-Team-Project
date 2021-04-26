import { Injectable } from '@angular/core';
import {Post} from './model/post';
import {POSTS} from './post-data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  postList: Post[] = POSTS;



}
