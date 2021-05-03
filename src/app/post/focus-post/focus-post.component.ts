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

  //@Input() post: any;
  postList: Post[] = [];

  // post: any = {
  //   id: -1,
  //   title: "Tets",
  //   imagelink: "",
  //   timestamp: new Date,
  //   postDescription: "",
  //   postComments: ["Hello"],
  //   vote: 0
  // }

  inputId: any = 0;
  comments: string[] = ["Hello"];
 
  votedGood: boolean = false;
  votedBad: boolean = false;

  post: any = {};


  constructor(private postService: PostService, private activatedRoute:ActivatedRoute) {
    

   }

  ngOnInit(): void {
    //this.postService.getPostData().subscribe(data => (this.postList = data));


    let inputId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    
    this.post = this.postService.getPost(inputId);

  
    this.comments = this.post?.postComments!;
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
