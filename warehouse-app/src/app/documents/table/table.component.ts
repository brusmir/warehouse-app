import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Document } from '../model/document';

@Component({
  selector: 'wh-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
	@Input() documents: Document[];
	@Input() sort: string;
	@Input() sortDirection: string;
	@Output() changeParams = new EventEmitter();

	display = {
		dateOfCreation: true,
		dateOfRecording: true,
		status: true,
		transactionType: true,
		businessPartner: true,
		businessPartnerLocation: true,
		year: true,
		form: false
	};

  constructor() { }

  ngOnInit() {
  }

  formToggle(){
  	this.display.form = !this.display.form;
  }

  sendParams(param){
  	if(this.sort == param){
  		this.sortDirection = this.sortDirection == 'asc' ? 'desc' : 'asc';
  	}else{
  		this.sort = param;
  		this.sortDirection = "asc";
  	}
  	this.changeParams.emit({sort: this.sort, sortDirection: this.sortDirection});
  }
}
