import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/post-service/posts.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post!: Post;
  constructor(private route: ActivatedRoute,
    private location: Location,
    private postService: PostsService) { }

  ngOnInit(): void {
    this.getPost();
  }

  getPost() {
    const id = this.route.snapshot.paramMap.get('id');
    id && this.postService.getSinglePost(+id).subscribe((data) => {
      this.post = data;
    });
  }

  update(post: Post) {
    this.postService.updatePost(post).subscribe((data)=>{this.goback();})
  }

  goback() {
    this.location.back();
  }

}
