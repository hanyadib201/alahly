import { Component, OnInit } from '@angular/core';
import { NewsArticle } from '../../models/news-article';
import { NewsService } from '../../services/news.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-list',
  imports: [MatCardModule ,CommonModule],
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit{
 articles: NewsArticle[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
        console.log("hellllo");

    this.newsService.getNews().subscribe(data => this.articles = data);
    console.log(this.articles);
  }
}