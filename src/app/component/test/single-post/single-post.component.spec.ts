import { first } from "rxjs";
import { SinglePostComponent } from "./single-post.component";
import { ComponentFixture, TestBed } from '@angular/core/testing'

describe("Single Post Component Test Cases", () => {
  let fixture: ComponentFixture<SinglePostComponent>;
  let component: SinglePostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePostComponent]
    });
    fixture = TestBed.createComponent(SinglePostComponent);
    component = fixture.componentInstance;
  });

  it("should create a single post component", () => {
    expect(component).toBeDefined();
  });

  it("Should raise an event and pass post object", () => {
    let post = { id: 1, body: 'body 1', title: 'title' };
    component.post = post;
    component.delete.pipe(first()).subscribe((selectedPost) => {
      expect(selectedPost).toEqual(post);
    });

    component.deletePost(new MouseEvent('click'));
  });
});