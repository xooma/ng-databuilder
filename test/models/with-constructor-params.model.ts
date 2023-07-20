export class WithConstructorParams {
	id: string;
	title: string;
	date: Date;
	amount: number;

	constructor(id: Required<string>, title: string, date: Date, amount: number) {
		this.id = id;
		this.title = title;
		this.date = date;
		this.amount = amount;
	}
}