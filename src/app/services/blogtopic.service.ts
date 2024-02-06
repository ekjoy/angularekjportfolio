import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { catchError, map, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IBlogTopic } from '../model/IBlogTopic';
import { IBlogTopicContent } from '../model/IBlogTopicContent';

@Injectable({
  providedIn: 'root',
})
export class BlogtopicService {
  videoList: any = [];
  thumpnailurl: string = environment.SoftigenApiImageLink;

  constructor(private httpClient: HttpClient) {}

  public getTopFiveTopic() {
    //return this.httpClient.get<IVideo[]>("assets/data/videosData.json")
    //return this.httpClient.get<IBlogTopic[]>(environment.SoftigenCoreApiLink+"api/BlogTopicContent/GetTopfivetopics");
    return this.httpClient
      .get<IBlogTopic[]>(
        environment.SoftigenCoreApiLink +
          'api/BlogTopicContent/GetTopfivetopics'
      )
      .pipe(
        map((response) =>
          response.map((x) => ({
            id: Number(x.id),
            description: x.description,
            title: x.title,
            image: this.thumpnailurl + x.image,
            content: x.content,
            modifiedDate: x.modifiedDate,
            modifiedBy: '',
            labels: [],
          }))
        ),
        retry(1),
        catchError((error) =>
          this.httpClient.get<IBlogTopic[]>('assets/data/blogTopicsData.json')
        )
      );
  }

  public getBlogContent(id: string): Observable<IBlogTopicContent> {
    //return this.httpClient.get<IVideo[]>("assets/data/videosData.json")
    return this.httpClient
      .get<IBlogTopicContent>(
        environment.SoftigenCoreApiLink +
          'api/BlogTopicContent/GetBlogTopicContent?Id=' +
          id
      )
      .pipe(
        map((response) => {
          const blogTopicContent: IBlogTopicContent = {
            id: response?.id ?? 1,
            title: response?.title ?? 'Sample Heading1 ',
            description: response?.description ?? '',
            topicId: response?.id ?? 1,
            subjectId: response?.id ?? 1,
            content: response?.content ?? 'Test Content',
            image: this.thumpnailurl + response?.image ?? 'p1.jpg',
            modifiedDate: response.modifiedDate,
          };

          return blogTopicContent;
        })
      )
      .pipe(
        retry(1),
        catchError((error) =>
          this.httpClient
            .get<IBlogTopic[]>('assets/data/blogTopicsData.json')
            .pipe(
              map((response) => {
                const btopic = response.find(
                  (element) => element.id === Number.parseInt(id)
                );

                const blogTopicContent: IBlogTopicContent = {
                  id: btopic?.id ?? 1,
                  title: btopic?.title ?? 'Sample Heading 1',
                  description: btopic?.description ?? '',
                  topicId: btopic?.id ?? 1,
                  subjectId: btopic?.id ?? 1,
                  content: btopic?.content ?? 'Test Content 1',
                  image: btopic?.image,
                  modifiedDate: btopic?.modifiedDate ?? '02-Oct-2023',
                };

                return blogTopicContent;
              })
            )
        )
      );
  }
}
