import { first } from "rxjs";
import { SinglePostComponent } from "./single-post.component";
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe("Single Post Component Test Cases", () => {
  let fixture: ComponentFixture<SinglePostComponent>;
  let component: SinglePostComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SinglePostComponent],
      schemas:[NO_ERRORS_SCHEMA]
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

  it("Should render the title", () => {
    const post = { id: 1, body: 'body 1', title: 'title 1' };
    component.post = post;
    fixture.detectChanges();
    const dom: HTMLElement = fixture.nativeElement;
    const a = dom.querySelector('a');
    expect(a?.textContent).toContain(post?.title)
  })
});