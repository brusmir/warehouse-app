import { Document } from "./document";

export class DocumentList{
	count: number;
	results: Document[];

	constructor(obj? :any){
		this.count = obj && obj.count || null;
		this.results = obj && obj.results.map( resp => new Document(resp)) || [];
	}
}