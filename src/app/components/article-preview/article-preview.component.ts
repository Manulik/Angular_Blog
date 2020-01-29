import { Component, OnInit, Input } from '@angular/core';
import {IArticle} from '../../interfaces/article'


@Component({
  selector: 'app-article-preview',
  templateUrl: './article-preview.component.html',
  styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent implements OnInit {


  @Input() article: IArticle;

  constructor() { }

  ngOnInit() {
    
  }

}