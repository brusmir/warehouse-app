import { Article } from '../model/article';

export class ArticleList {
	count: number;
	results: Article[];

	constructor(obj? :any){
		this.count = obj && obj.count || null;
		this.results = obj && obj.results.map(res => new Article(res)) || [];
	}
}