import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {Post} from 'src/app/models/post.model';
import {PostService} from 'src/app/services/post.service';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  

  constructor(private postService: PostService, private router: Router) { }

  postList : Post[] = this.postService.posts;
  focus: boolean = false;
  selectedPost: Post = {};
  role: string = "user";

  ngOnInit(): void {
    this.fetchData();
  }


  focusPost(newPost: Post){
    //this.focus = true;
    this.router.navigate(['/post/focus', newPost.id]);
  }

  switchRole(){
    if(this.role == "user"){
      this.role = "admin";
    (<HTMLInputElement>document.getElementById("roleBtn")).innerHTML = "Switch to User";
    (<HTMLInputElement>document.getElementById("roleBtn")).classList.replace("btn-danger", "btn-primary");

    console.log("Button Pushed");
    }
    else{
      this.role = "user";
      (<HTMLInputElement>document.getElementById("roleBtn")).innerHTML = "Switch to Admin";
    (<HTMLInputElement>document.getElementById("roleBtn")).classList.replace("btn-primary", "btn-danger");

    }
  }

  deletePost(postIndex: number){
    this.postService.deletePost(postIndex).subscribe();
  }

  fetchData(){
    this.postService.getPostData().subscribe(data => (this.postList = data));
  }

}
