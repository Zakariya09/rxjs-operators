import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { PostsService } from '../../../services/post-service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService) {

  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.postService.getPost().subscribe((data) => {
      this.posts = data;
    });
  }

  deletePost(deletedPost: Post) {
    this.posts = this.posts.filter((post) => post?.id !== deletedPost?.id);
    this.postService.deletePost(deletedPost).subscribe();
  }

}
