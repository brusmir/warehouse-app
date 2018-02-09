import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wh-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {
	@Input() private totalItems;
	@Input() private activePage;
	@Input() private pageSize;

	@Output() private onPageSelected = new EventEmitter();

	private pages: number[];
	private numOfPages: number;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
  	this.numOfPages = Math.ceil(this.totalItems/this.pageSize);
  	this.pages = [];
  	for(let i=1; i<=this.numOfPages; i++){
  		this.pages.push(i);
  	}
  }

  pageSelected(page:number){
  	if(page >= 1 && page <= this.numOfPages){
  		this.activePage = page;
  		this.onPageSelected.emit({page: this.activePage});
  	}
  }

}
