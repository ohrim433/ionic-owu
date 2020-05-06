import { Component, OnInit } from '@angular/core';
import {PostModel} from "../models/post-model";
import {PostService} from "../services/post.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  posts: PostModel[];

  constructor(private postService: PostService) {
    this.postService.getAllPosts().subscribe(value => this.posts = value);
  }

  ngOnInit() {}

}
