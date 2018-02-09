import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Document } from '../../model/document';
import { DocumentsService } from '../../service/documents.service';

@Component({
  selector: 'wh-item-panel',
  templateUrl: './item-panel.component.html',
  styleUrls: ['./item-panel.component.css']
})
export class ItemPanelComponent implements OnInit {
	@Input() private document: Document;
  @Output() private record = new EventEmitter();

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
  }

  recordDocument(){
  	this.document.dateOfRecording = new Date().toISOString();
  	this.document.status = "recorded";
  	this.record.emit(this.document);
  }

}
