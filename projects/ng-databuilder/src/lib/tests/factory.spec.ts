import {IFactory, makeFactoryFrom} from "../index";
import {testingProduct, testingProductWithEmptyArray} from "./factory.spec.data";
import {HttpHeaders, HttpResponse} from "@angular/common/http";
import {ITestingProduct} from "./models";

describe('Factory', () => {
  it('build should create object', () => {
    const testingProductFactory = makeFactoryFrom(testingProductWithEmptyArray);

    expect(testingProductFactory.build()).toEqual(testingProductWithEmptyArray);
  })

  it('withProperties should set properties from args', () => {
    const expected: ITestingProduct = { ...testingProductWithEmptyArray, id: '1', title: 'test' };
    const result = makeFactoryFrom(testingProductWithEmptyArray).withProperties({id: '1', title: 'test'}).build();

    expect(result).toEqual(expected);
  })

  describe('randomizeParams() should randomize property from args', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let testingFactory: IFactory<ITestingProduct>;

    beforeEach(() => {
      testingFactory = makeFactoryFrom(testingProductWithEmptyArray)
    })

    test('boolean', () => {
      const booleanResult = testingFactory.randomizeParams('isOk').build();

      expect(typeof booleanResult.isOk).toEqual('boolean');
    })

    test('number', () => {
      const numberResult = testingFactory.randomizeParams('amount').build();

      expect(numberResult.amount).not.toEqual(testingProductWithEmptyArray.amount);
      expect(typeof numberResult.amount).toEqual('number');
    })

    test('Date', () => {
      const dateResult = testingFactory.randomizeParams('date').build();

      expect(dateResult.date).not.toEqual(testingProductWithEmptyArray.date);
      expect(dateResult.date).toBeInstanceOf(Date);
    })

    test('string', () => {
      const stringResult = testingFactory.randomizeParams( 'title').build();

      expect(stringResult.id).not.toEqual(testingProductWithEmptyArray.title);
      expect(typeof stringResult.title).toEqual('string');
    })

    test('Array', () => {
      const arrayResult = testingFactory.randomizeParams( 'tags').build();

      expect(arrayResult.tags).not.toEqual(testingProductWithEmptyArray.tags);
      expect(Array.isArray(arrayResult.tags)).toBeTruthy();
    })

    test('multiple params', () => {
      const arrayResult = testingFactory.randomizeParams( ['title', 'amount', 'date']).build();

      expect(arrayResult.title).not.toEqual(testingProductWithEmptyArray.title);
      expect(arrayResult.amount).not.toEqual(testingProductWithEmptyArray.amount);
      expect(arrayResult.date).not.toEqual(testingProductWithEmptyArray.date);
    })
  })

  describe('toHttpResponse() should create http response from object', () => {
    const result = makeFactoryFrom(testingProductWithEmptyArray)
        .toHttpResponse()
        .withStatus(200)
        .withBody(testingProduct)
        .withHeaders({ 'Content-Type': 'application/json' })
        .build();

    const expected: HttpResponse<ITestingProduct> = new HttpResponse<ITestingProduct>({ status: 200, body: testingProduct, headers: new HttpHeaders({'Content-Type': 'application/json'}) });

    expect(JSON.stringify(result)).toEqual(JSON.stringify(expected));
  })
})
