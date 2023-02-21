import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  getPost() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }

  deletePost(post: Post) {
    return this.http.delete(`https://jsonplaceholder.typicode.com/post/${post?.id}`);
  }

  getSinglePost(id: number) {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/post/${id}`);
  }
}

