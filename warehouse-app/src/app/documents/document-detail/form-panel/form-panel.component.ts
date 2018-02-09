import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from '../../model/article';
import { Item } from '../../model/item';

@Component({
  selector: 'wh-form-panel',
  templateUrl: './form-panel.component.html',
  styleUrls: ['./form-panel.component.css']
})
export class FormPanelComponent implements OnInit {
	@Input() private articles: Article[];
	@Output() private addItem = new EventEmitter();
	private newItem = new Item();	

  constructor() { }

  ngOnInit() {
  }

  save(){
  	this.addItem.emit(this.newItem);
  	this.newItem = new Item();
  }

}
