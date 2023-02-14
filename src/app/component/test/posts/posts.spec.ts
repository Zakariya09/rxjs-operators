import { of } from "rxjs";
import { Post } from "src/app/models/post.model"
import { PostsComponent } from "./posts.component";
import { TestBed } from '@angular/core/testing'
import { PostsService } from "src/app/services/post-service/posts.service";

describe("Post Component Test Cases", () => {
    let Posts: Post[] = [];
    let component: PostsComponent;
    let postMockService: any;

    beforeEach(() => {
        Posts = [
            {
                id: 1,
                body: "body 1",
                title: "title 1"
            },
            {
                id: 2,
                body: "body 2",
                title: "title 2"
            }
        ];
        postMockService = jasmine.createSpyObj(['getPost', 'deletePost']);

        TestBed.configureTestingModule({
            providers: [PostsComponent,
                {
                    provide: PostsService,
                    useValue: postMockService
                }],

        })

        // component = new PostsComponent(postMockService); //init. component with mock instance
        component = TestBed.inject(PostsComponent);//init component using TestBed instance

    });

    //testing delete function (Isolated test cases i.e individual function testing)
    describe('delete', () => {

        beforeEach(() => {
            postMockService.deletePost.and.returnValue(of(true));
            component.posts = Posts;
        });

        it(" posts should not be empty", () => {
            expect(Posts?.length > 0).toBe(true);
        });

        it("should delete the record", () => {
            component.deletePost(component.posts[1]);
            expect(component.posts.length).toBe(1);
        });

        it("should call delete function only once", () => {
            component.deletePost(component.posts[1]);
            expect(postMockService.deletePost).toHaveBeenCalledTimes(1);
        });

        it("should delete the actual object", () => {
            component.deletePost(component.posts[1]);
            for (let post of component.posts) {
                expect(post).not.toEqual(Posts[1]);
            }
        });
    })

})