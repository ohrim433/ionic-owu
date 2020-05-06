import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PostModel} from "../models/post-model";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) { }

  getAllPosts() {
    return this.httpClient.get<PostModel[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
