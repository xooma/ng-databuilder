export interface ITestingProduct {
	id: string;
	title: string;
	date?: Date;
	amount: number;
	isOk?: boolean;
	tags?: Array<string>;
	products?: Array<ITestingProduct>;
}