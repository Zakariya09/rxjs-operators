import { first } from "rxjs";
import { SinglePostComponent } from "./single-post.component";

describe("Single Post Component Test Cases", () => {

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