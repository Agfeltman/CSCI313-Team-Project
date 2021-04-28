import { Component, Input, OnInit } from '@angular/core';
import {Post} from 'src/app/models/post.model';


@Component({
  selector: 'app-focus-post',
  templateUrl: './focus-post.component.html',
  styleUrls: ['./focus-post.component.css']
})
export class FocusPostComponent implements OnInit {

  @Input() post : any;

  constructor() { }

  ngOnInit(): void {
  }

}
