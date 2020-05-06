import { Component, OnInit } from '@angular/core';
import {CommentService} from "../services/comment.service";
import {CommentModel} from "../models/comment-model";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent implements OnInit {
  comments: CommentModel[];
  constructor(private commentService: CommentService) {
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

  ngOnInit() {}

}
