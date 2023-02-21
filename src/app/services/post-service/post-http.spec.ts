import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { PostsService } from "./posts.service"
import { TestBed } from '@angular/core/testing'

describe("getPost() HTTP Service Without httpClient", () => {
    let postService: PostsService;
    let httpTestingController: HttpTestingController;
    let urlStr = 'https://jsonplaceholder.typicode.com/posts'
    let POSTS = [
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

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [PostsService]
        });

        postService = TestBed.inject(PostsService);
        httpTestingController = TestBed.inject(HttpTestingController);
    });

    it("should return post data on getPost() API Call", (done: DoneFn) => {

        postService.getPost().subscribe((data) => {
            expect(data).toEqual(POSTS);
            //done comes with test case to inform that test case is done here.
            done();
        });

        const request = httpTestingController.expectOne(urlStr);

        request.flush(POSTS);
        expect(request.request.method).toBe('GET');
    });


    it("Should restrict other API calls than one is allowed", () => {
        let id = 1;
        postService.getSinglePost(1).subscribe();
        // postService.getSinglePost(2).subscribe();

        const request = httpTestingController
            .expectOne(`https://jsonplaceholder.typicode.com/post/${id}`);

        expect(request.request.method).toBe('GET');
        //verify will stop other than request than allowed by httpTestingController 
        httpTestingController.verify();
    });
});