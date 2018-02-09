import { Item } from './item';

export class ItemList {
	count: number;
	results: Item[];

	constructor(obj? :any){
		this.count = obj && obj.count || null;
		this.results = obj && obj.results.map(res => new Item(res)) || [];
	}
}