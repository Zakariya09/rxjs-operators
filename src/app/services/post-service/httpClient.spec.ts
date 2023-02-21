import { HttpClient } from '@angular/common/http'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'

interface Data {
    name: string
}
describe("HttpClient Test Cases",
    () => {
        let httpClient: HttpClient;
        let httpTestingController: HttpTestingController;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });

            httpClient = TestBed.inject(HttpClient);
            httpTestingController = TestBed.inject(HttpTestingController);
        });

        it("should make api call with get request", () => {
            const sampleData: Data= {name:"Zakariya Khan"};
            httpClient.get<Data>('/data').subscribe((data)=>{
                expect(data).toBe(sampleData);
            });

            //making api call at once and monitoring given URL
            const request = httpTestingController.expectOne('/data');
            //returning sample data as response to http GET request
            request.flush(sampleData);
            
            //Verifying method which method is call for the given URL
            expect(request.request.method).toBe('GET');
        });
    });