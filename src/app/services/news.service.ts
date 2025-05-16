import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsArticle } from '../models/news-article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  // test natifly
  private apiUrl = 'http://alahlysport360.runasp.net/api/News';

  constructor(private http: HttpClient) {}

  getNews(): Observable<NewsArticle[]> {
    return this.http.get<NewsArticle[]>(this.apiUrl);
  }

  createNews(article: NewsArticle): Observable<NewsArticle> {
    return this.http.post<NewsArticle>(this.apiUrl, article);
  }
}