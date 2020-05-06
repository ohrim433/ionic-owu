import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CommentModel} from "../models/comment-model";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private httpClient: HttpClient) { }

  getAllComments() {
    return this.httpClient.get<CommentModel[]>('https://jsonplaceholder.typicode.com/comments');
  }
}
