import {ITestingProduct} from "./models";

export const testingProduct: ITestingProduct = {
  id: '1',
  title: 'test',
  date: new Date('2020-01-01T00:00:00.000Z'),
  amount: 42,
  isOk: true,
  tags: ['tag1', 'tag2'],
  products: [],
}

export const testingProductWithEmptyArray: ITestingProduct = {
  id: '1',
  title: 'test',
  date: new Date('2020-01-01T00:00:00.000Z'),
  amount: 42,
  isOk: true,
  tags: ['tag1', 'tag2'],
  products: [],
}