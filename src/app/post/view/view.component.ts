import { Component, OnInit } from '@angular/core';
import {Post} from 'src/app/models/post.model';
import {PostService} from 'src/app/services/post.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  constructor(private postService: PostService) { }

  postList : Post[] = this.postService.posts;

  

  ngOnInit(): void {

  }

}
