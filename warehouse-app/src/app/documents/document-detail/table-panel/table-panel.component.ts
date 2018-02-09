import { Component, OnInit, Input } from '@angular/core';
import { DocumentsService } from '../../service/documents.service';
import { Item } from '../../model/item';
import { Article } from '../../model/article';

@Component({
  selector: 'wh-table-panel',
  templateUrl: './table-panel.component.html',
  styleUrls: ['./table-panel.component.css']
})
export class TablePanelComponent implements OnInit {
	@Input() private items: Item[];	

  constructor(private documentsService: DocumentsService) { }

  ngOnInit() {
  }

}
