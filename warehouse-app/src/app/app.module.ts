import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { DocumentsComponent } from './documents/documents.component';
import { TableComponent } from './documents/table/table.component';
import { DocumentsService } from './documents/service/documents.service';
import { PaginationComponent } from './documents/pagination/pagination.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { ItemPanelComponent } from './documents/document-detail/item-panel/item-panel.component';
import { TablePanelComponent } from './documents/document-detail/table-panel/table-panel.component';
import { FormPanelComponent } from './documents/document-detail/form-panel/form-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    DocumentsComponent,
    TableComponent,
    PaginationComponent,
    DocumentDetailComponent,
    ItemPanelComponent,
    TablePanelComponent,
    FormPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DocumentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
