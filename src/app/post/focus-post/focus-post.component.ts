import { Component, Input, OnInit } from '@angular/core';
import {Post} from 'src/app/models/post.model';
import {PostService} from 'src/app/services/post.service';

@Component({
  selector: 'app-focus-post',
  templateUrl: './focus-post.component.html',
  styleUrls: ['./focus-post.component.css']
})
export class FocusPostComponent implements OnInit {

  @Input() post : any;
  @Input() role: any;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
  }

}
