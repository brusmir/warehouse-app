import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../service/documents.service';
import { ActivatedRoute } from '@angular/router';
import { Document } from '../model/document';
import { Item } from '../model/item';
import { Article } from '../model/article';
import { Observable } from 'rxjs';
import { ArticleList } from '../model/articleList';
import { ItemList } from '../model/itemList';

@Component({
  selector: 'wh-document-detail',
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {

	private document: Document;
	private articles: Article[];
	private items: Item[];

  constructor(private documentsService: DocumentsService, private route: ActivatedRoute) { }

  ngOnInit() {
  	let id = parseInt(this.route.snapshot.paramMap.get('id'));
    Observable.forkJoin([this.documentsService.getDocument(id), this.documentsService.getItems(id), this.documentsService.getArticle()])
    .subscribe(res => {
      this.document = res[0];
      this.articles = (<ArticleList>res[2]).results;
      this.items = (<ItemList>res[1]).results.map(item => {
        return this.mapArticle(item);
      });
    }, err => {
      console.log("error: " + err);
    });
  }

  private mapArticle(item: Item): Item {
    for(let i = 0; i < this.articles.length; i++) {
      if(this.articles[i]['code'] == item.article) {
        item.article = this.articles[i]['name'];
        return item;
      }
    }
  }

  newItem(item){
    item.documents = this.document._id;
    this.documentsService.saveItem(item).subscribe(i => this.items.push(this.mapArticle(i)));
  }

  updateDocument(document){
    this.documentsService.updateDocument(document).subscribe(res => this.document = res);
  }
}
