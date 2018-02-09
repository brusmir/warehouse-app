import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { DocumentList } from '../model/documentList';
import { Document } from '../model/document';
import { ItemList } from '../model/itemList';
import { ArticleList } from '../model/articleList';
import { Item } from '../model/item';

const baseUrl = "http://localhost:3000/api/documents";
const articleUrl = "http://localhost:3000/api/articles";

@Injectable()
export class DocumentsService {

  constructor(private http: HttpClient) { }

  getDocuments(params? :any):Observable<DocumentList>{
  	let queryParams = {};
		if(params){
			queryParams = {
				params : new HttpParams()
				.set("sort", params.sort || "")
            	.set("sortDirection", params.sortDirection || "")
            	.set("page", params.page && params.page.toString() || "")
            	.set("pageSize", params.page && params.pageSize.toString() || "")            	
        	}
      	}
  	return this.http.get(baseUrl, queryParams).map(respon => {
  		return new DocumentList(respon);
  	})
  }

  getDocument(id:number):Observable<Document>{
    return this.http.get(baseUrl + "/" + id).map( resp => new Document(resp))
  }

  updateDocument(document: Document){
    return this.http.put(baseUrl + "/" + document._id, document).map( resp => new Document(resp))
  }

  getItems(id:number):Observable<ItemList>{
    return this.http.get(baseUrl + "/" + id + "/" + "items").map( res => new ItemList(res))
  }

  getArticle():Observable<ArticleList>{
    return this.http.get(articleUrl).map(res => new ArticleList(res))
  }

  saveItem(item):Observable<Item>{
    return this.http.post(baseUrl + "/" + item.documents + "/items", item).map( res => new Item(res));
  }
}
