import { findLast } from '@angular/compiler/src/directive_resolver';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Post} from 'src/app/models/post.model';
import {PostService} from 'src/app/services/post.service';
import {ActivatedRoute, Router,ParamMap} from '@angular/router';


@Component({
  selector: 'app-focus-post',
  templateUrl: './focus-post.component.html',
  styleUrls: ['./focus-post.component.css']
})
export class FocusPostComponent implements OnInit {

  @Input() post: any;
  


  inputId: any = 0;
  comments: string[] = [];
 
  votedGood: boolean = false;
  votedBad: boolean = false;



  constructor(private postService: PostService, private activatedRoute:ActivatedRoute) {
    

   }

  ngOnInit(): void {
    this.inputId = this.activatedRoute.snapshot.paramMap.get('id');
    this.post = this.postService.getPost(this.inputId);
    console.log("Input ID:" + this.inputId);


    this.comments = this.post.postComments;
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
