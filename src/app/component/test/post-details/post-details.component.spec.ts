import { Location } from '@angular/common';
import { TestBed, ComponentFixture } from '@angular/core/testing'
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/post-service/posts.service';
import { PostDetailsComponent } from './post-details.component';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { FormsModule } from '@angular/forms';

describe("Post Details Component Test Cases", () => {
  let fixture: ComponentFixture<PostDetailsComponent>;
  let mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: () => {
          return '3';
        }
      }
    }
  }
  let mockLocation = jasmine.createSpyObj(['back']);
  let mockPostService = jasmine.createSpyObj('PostsService', ['getSinglePost', 'updatePost']);

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostDetailsComponent],
      schemas:[NO_ERRORS_SCHEMA],
      imports:[FormsModule],
      providers: [
        { provide: PostsService, useValue: mockPostService },
        { provide: Location, useValue: mockLocation },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    });

    fixture = TestBed.createComponent(PostDetailsComponent);
  });


  it("Title should be render", () => {
    mockPostService.getSinglePost.and.returnValue(of({
      id: 1,
      title: 'Zakariya',
      body: 'developer'
    }));

    fixture.detectChanges();

    //accessing element using debug element
    // const element = fixture.debugElement.query(By.css('h2')) .nativeElement as HTMLElement;

    //accessing element using nativeElement Method
    const element = fixture.nativeElement.querySelector('h2') as HTMLElement;

    // expect(element.textContent).toBe('Zakariya');
    expect(element.textContent).toBe(fixture.componentInstance.post.title);
  })

})