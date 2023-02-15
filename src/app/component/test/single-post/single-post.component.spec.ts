import { first } from "rxjs";
import { SinglePostComponent } from "./single-post.component";
import { TestBed } from '@angular/core/testing'

describe("Single Post Component Test Cases", () => {

  it("should create a single post component", () => {
    TestBed.configureTestingModule({
      declarations: [SinglePostComponent]
    });
    let fixture = TestBed.createComponent(SinglePostComponent);
    let component = fixture.componentInstance;
    expect(component).toBeDefined();
  })

  it("Should raise an event and pass post object", () => {
    let component = new SinglePostComponent();
    let post = { id: 1, body: 'body 1', title: 'title' };
    component.post = post;

    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    component.deletePost(new MouseEvent('click'));
  });
});