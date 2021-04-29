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
 
  votedGood: boolean = false;
  votedBad: boolean = false;

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

  //upvote and downvote methods
  upVote(){
    if(!(this.votedGood))
    {
      this.post.vote++;
      this.votedGood = true;
      this.votedBad = false;
    }
    
  }
  downVote(){
    if(!(this.votedBad))
    {
      this.post.vote--;
      this.votedGood = false;
      this.votedBad = true;
    }
  }


}
