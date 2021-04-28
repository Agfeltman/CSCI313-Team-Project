import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Post} from 'src/app/models/post.model';
import {PostService} from 'src/app/services/post.service';

@Component({
  selector: 'app-focus-post',
  templateUrl: './focus-post.component.html',
  styleUrls: ['./focus-post.component.css']
})
export class FocusPostComponent implements OnInit {

  @Input() post: any;
  @Input() role: any;

  comments: string[] = [];
 

  constructor(private postService: PostService) {
   }

  ngOnInit(): void {
    this.comments = this.post.postComments;
    console.log(this.comments[0]);
  }

  commentForm = new FormGroup({
    newComment: new FormControl('', Validators.required),
  });

  onSubmit(){
    this.post.postComments.push(this.commentForm.get('newComment')!.value);
    this.commentForm.reset();
  }

}
