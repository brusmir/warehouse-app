import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';

const appRoutes: Routes = [
	{ path: 'home', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'documents', component: DocumentsComponent },
	{ path: 'documents/:id', component: DocumentDetailComponent},
	{ path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }