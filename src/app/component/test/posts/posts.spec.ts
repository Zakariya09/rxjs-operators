import { of } from "rxjs";
import { Post } from "src/app/models/post.model"
import { PostsComponent } from "./posts.component";
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { PostsService } from "src/app/services/post-service/posts.service";
import { SinglePostComponent } from "../single-post/single-post.component";
import { RouterTestingModule } from "@angular/router/testing";
import { Component, Input } from '@angular/core'
import { By } from "@angular/platform-browser";

describe("Post Component Test Cases", () => {
    let Posts: Post[] = [];
    let component: PostsComponent;
    let postMockService: any;
    let fixture: ComponentFixture<PostsComponent>;

    //creating fake component (component mocking)
    // @Component({
    //     selector:'app-single-post',
    //     template:''
    //     })

    //     class FakeComponent{
    //         @Input () post!:Post;
    //     }


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

        //mocking fake service
        postMockService = jasmine.createSpyObj(['getPost', 'deletePost']);

        TestBed.configureTestingModule({
            declarations: [PostsComponent,
                //  FakeComponent,
                SinglePostComponent
            ],
            imports: [RouterTestingModule],
            providers: [PostsComponent,

                {
                    provide: PostsService,
                    useValue: postMockService
                }],

        })

        // component = new PostsComponent(postMockService); //init. component with mock instance
        // component = TestBed.inject(PostsComponent);//init component using TestBed instance

        fixture = TestBed.createComponent(PostsComponent);
        component = fixture.componentInstance;



    });

    //testing delete function (Isolated test cases i.e individual function testing)
    describe('delete', () => {

        beforeEach(() => {
            postMockService.deletePost.and.returnValue(of(true));
            component.posts = Posts;
        });

        //Testing Child Component From Parent Component (Deep Integration Test)
        it("should check whether exact post is getting send to each post component", () => {
            postMockService.getPost.and.returnValue(of(Posts));
            fixture.detectChanges();
            const postDebugElements = fixture.debugElement.queryAll(By.directive(SinglePostComponent));
            for (let i = 0; i < postDebugElements?.length; i++) {
                let debugComponentInstance = postDebugElements[i].componentInstance as SinglePostComponent;
                expect(debugComponentInstance?.post?.title).toEqual(Posts[i]?.title);
            }
        })

        //targetting multiple elements using debug element (Shallow Integration test)
        it("should render one single post component for each post", () => {
            postMockService.getPost.and.returnValue(of(Posts));
            fixture.detectChanges();
            const debugElement = fixture.debugElement;
            const postElements = debugElement.queryAll(By.css('.posts'))
            expect(postElements?.length).toBe(Posts?.length)
        })

        //Targeting Child Component Using Debug element Directive method (Deep Integration testing)
        it("should render original post component for each post", () => {
            postMockService.getPost.and.returnValue(of(Posts));
            fixture.detectChanges();
            const singlePostComponentInstances = fixture.debugElement.queryAll(By.directive(SinglePostComponent));
            expect(singlePostComponentInstances?.length).toBe(Posts?.length);
        })

        it("should take posts from getPost Service", () => {
            postMockService.getPost.and.returnValue(of(Posts));
            fixture.detectChanges();
            expect(component.posts?.length).toBe(2)
        })

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

        it("should detect delete button click", () => {
            spyOn(component, 'deletePost');
            postMockService.getPost.and.returnValue(of(Posts));
            fixture.detectChanges();

            const childComponents = fixture.debugElement.queryAll(By.directive(SinglePostComponent));

            for(let i = 0; i< childComponents.length; i++){
                childComponents[i].query(By.css('button')).triggerEventHandler('click', { stopPropagation: () => { } });
                expect(component.deletePost).toHaveBeenCalledWith(Posts[i]);
            }
           

        });
    })

})