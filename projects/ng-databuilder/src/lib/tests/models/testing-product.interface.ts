import {Observable} from "rxjs";

export interface ITestingProduct {
	id: string;
	title: string;
	date?: Date;
	amount: number;
	isOk?: boolean;
	tags?: Array<string>;
	products?: Array<ITestingProduct>;
	obs?: Observable<unknown>;
}
