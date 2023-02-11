import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent {
  @Input() post!: Post;
  @Output() delete = new EventEmitter<Post>();


  deletePost(event: Event) {
    event.stopPropagation();
    this.delete.emit(this.post);
  }
}
