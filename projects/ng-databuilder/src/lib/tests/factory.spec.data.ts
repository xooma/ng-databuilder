import {ITestingProduct} from "./models";
import {of} from "rxjs";

export const testingProductThird: ITestingProduct = {
  id: '2',
  title: 'test2',
  date: new Date('2020-01-02T00:00:00.000Z'),
  amount: 43,
  isOk: true,
  tags: ['tag1', 'tag2'],
}

export const testingProductSecond: ITestingProduct = {
  id: '1',
  title: 'test',
  date: new Date('2020-01-01T00:00:00.000Z'),
  amount: 42,
  isOk: true,
  tags: ['tag1', 'tag2'],
  products: [testingProductThird, testingProductThird],
}

export const testingProduct: ITestingProduct = {
  id: '2',
  title: 'test2',
  date: new Date('2020-01-02T00:00:00.000Z'),
  amount: 43,
  isOk: true,
  tags: ['tag1', 'tag2'],
  products: [testingProductSecond],
  obs: of(testingProductSecond),
}

export const testingProductWithEmptyArray: ITestingProduct = {
  id: '3',
  title: 'test3',
  date: new Date('2020-01-03T00:00:00.000Z'),
  amount: 44,
  isOk: false,
  tags: ['tag1'],
  products: [],
}
