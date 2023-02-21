import { HttpClient } from "@angular/common/http";
import { Post } from "src/app/models/post.model";
import { PostsService } from "./posts.service";
import { of } from 'rxjs';

describe("Post service test cases", () => {

    let HttpClientSpy: jasmine.SpyObj<HttpClient>;
    let postService: PostsService;
    let Posts: Post[] = [];

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

        HttpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        postService = new PostsService(HttpClientSpy);
    });


    describe("getPost()", () => {
        it("should call getPost once", () => {
            HttpClientSpy.get.and.returnValue(of(Posts));
            postService.getPost().subscribe({
                next: (posts) => {
                    expect(posts).toEqual(Posts);
                },
                error: () => { },
            });
            expect(HttpClientSpy.get).toHaveBeenCalledTimes(1);
        })
    });
});