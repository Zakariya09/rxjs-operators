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
        let urlStr = '/data'
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule]
            });

            httpClient = TestBed.inject(HttpClient);
            httpTestingController = TestBed.inject(HttpTestingController);
        });

        it("should make api call with get request", () => {
            const sampleData: Data = { name: "Zakariya Khan" };
            httpClient.get<Data>('/data').subscribe((data) => {
                expect(data).toBe(sampleData);
            });

            //making api call at once and monitoring given URL
            const request = httpTestingController.expectOne('/data');
            //returning sample data as response to http GET request
            request.flush(sampleData);

            //Verifying method which method is call for the given URL
            expect(request.request.method).toBe('GET');
        });


        //multiple API call testing
        it("should make multiple api calls", () => {
            const sampleData: Data[] = [{ name: 'request 1' }, { name: 'request 2' }];

            httpClient.get<Data[]>(urlStr).subscribe((data) => {
                expect(data?.length).toBe(0);
            });
            httpClient.get<Data[]>(urlStr).subscribe((data) => {
                expect(data).toEqual([sampleData[0]])
            });
            httpClient.get<Data[]>(urlStr).subscribe((data) => {
                expect(data).toEqual(sampleData);
            });

            //match use to detect multiple api calls on same url request
            const requests = httpTestingController.match(urlStr);

            expect(requests.length).toBe(3);

            //sending dummy reponse to the given URL
            requests[0].flush([]);
            requests[1].flush([sampleData[0]]);
            requests[2].flush(sampleData);
        })
    });