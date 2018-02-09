export class Document{
	_id: number;
	dateOfRecording: string;
	dateOfCreation: string;
	transactionType: string;
	status: string;
	year: number;
	businessPartner: BusinessPartner; 

	constructor(obj? :any){
		this._id = obj && obj._id || null;
		this.dateOfRecording = obj && obj.dateOfRecording || null;
		this.dateOfCreation = obj && obj.dateOfCreation || null;
		this.transactionType = obj && obj.transactionType || null;
		this.status = obj && obj.status || null;
		this.year = obj && obj.year || null;
		this.businessPartner = obj && new BusinessPartner(obj.businessPartner) || null;
	}

}

class BusinessPartner{
	name: string;
	city: string;
	address: string;

	constructor(obj? :any){
		this.name = obj && obj.name || null;
		this.city = obj && obj.city || null;
		this.address = obj && obj.address || null;
	}
}
