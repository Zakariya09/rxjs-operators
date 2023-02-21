import { of } from "rxjs";
import { Post } from "src/app/models/post.model"
import { PostsComponent } from "./posts.component";
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { PostsService } from "src/app/services/post-service/posts.service";
import { SinglePostComponent } from "../single-post/single-post.component";
import { RouterTestingModule } from "@angular/router/testing";
import {Component, Input} from '@angular/core'

describe("Post Component Test Cases", () => {
    let Posts: Post[] = [];
    let component: PostsComponent;
    let postMockService: any;
    let fixture: ComponentFixture<PostsComponent>;

    //creating fake component (component mocking)
    @Component({
        selector:'app-single-post',
        template:''
        })

        class FakeComponent{
            @Input () post!:Post;
        }

        
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
            declarations:[PostsComponent, FakeComponent,
                // SinglePostComponent
            ],
            imports:[RouterTestingModule],
            providers: [PostsComponent,
                
                {
                    provide: PostsService,
                    useValue: postMockService
                }],

        })

        // component = new PostsComponent(postMockService); //init. component with mock instance
        // component = TestBed.inject(PostsComponent);//init component using TestBed instance

        fixture = TestBed.createComponent( PostsComponent);
        component = fixture.componentInstance;

        

    });

    //testing delete function (Isolated test cases i.e individual function testing)
    describe('delete', () => {

        beforeEach(() => {
            postMockService.deletePost.and.returnValue(of(true));
            component.posts = Posts;
        });

        it("should take posts from getPost Service",()=>{
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
    })

})