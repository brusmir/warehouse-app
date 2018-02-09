import { Component, OnInit } from '@angular/core';
import { DocumentsService } from './service/documents.service';
import { Document } from './model/document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
	private count: number;
	private results: Document[];
  private params = {
    sort: "dateOfCreation",
    sortDirection: "asc",
    page: 1,
    pageSize: 10
  }
  constructor(private documentService: DocumentsService) { }

  ngOnInit() {
  	this.getDocuments()
  }

  getDocuments(){
  	this.documentService.getDocuments(this.params).subscribe( resp => {
  		this.count = resp.count;
  		this.results = resp.results;
  	});
  }

  updateParams(param){
    if(param){
      this.params.sort = param.sort || this.params.sort;
      this.params.sortDirection = param.sortDirection || this.params.sortDirection;
      this.params.page = param.page || this.params.page;
    }
    this.getDocuments();
  }

}
