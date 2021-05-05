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

    let inputId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    
    this.postService.getPost(inputId).subscribe(data => this.post = data);

  
    this.comments = this.post?.postComments!;
  }




  commentForm = new FormGroup({
    newComment: new FormControl('', Validators.required),
  });

  onSubmit(){
    let newComment:string = this.commentForm.get('newComment')!.value;

    if(!this.post.postComments)
      this.post.postComments = [newComment];
    else{
    this.post.postComments.push(newComment);
    this.comments = this.post.postComments;
    }
    this.commentForm.reset();
    this.postService.updatePost(this.post).subscribe();
  }

  //upvote and downvote methods
  upVote(){
    if (!this.votedGood && !this.votedBad)
    {
      this.post.vote++;
      this.votedGood = true;
      (<HTMLInputElement>document.getElementById("upvoteBtn")).classList.replace("btn-outline-success", "btn-success");
    }
    else if (!this.votedGood && this.votedBad)
    {
      this.post.vote += 2;
      this.votedGood = true;
      (<HTMLInputElement>document.getElementById("upvoteBtn")).classList.replace("btn-outline-success", "btn-success");
      this.votedBad = false;
      (<HTMLInputElement>document.getElementById("downvoteBtn")).classList.replace("btn-danger", "btn-outline-danger");
    }
    else if (this.votedGood)
    {
      this.post.vote--;
      this.votedGood = false;
      (<HTMLInputElement>document.getElementById("upvoteBtn")).classList.replace("btn-success", "btn-outline-success");
    }
    this.postService.updatePost(this.post).subscribe();
    
  }
  downVote(){
    if (!this.votedGood && !this.votedBad)
    {
      this.post.vote--;
      this.votedBad = true;
      (<HTMLInputElement>document.getElementById("downvoteBtn")).classList.replace("btn-outline-danger", "btn-danger");
    }
    else if (this.votedGood && !this.votedBad)
    {
      this.post.vote -= 2;
      this.votedGood = false;
      (<HTMLInputElement>document.getElementById("upvoteBtn")).classList.replace("btn-success", "btn-outline-success");
      this.votedBad = true;
      (<HTMLInputElement>document.getElementById("downvoteBtn")).classList.replace("btn-outline-danger", "btn-danger");
    }
    else if (!this.votedGood && this.votedBad)
    {
      this.post.vote++;
      this.votedBad = false;
      (<HTMLInputElement>document.getElementById("downvoteBtn")).classList.replace("btn-danger", "btn-outline-danger");
    }
    this.postService.updatePost(this.post).subscribe();

  }
}
