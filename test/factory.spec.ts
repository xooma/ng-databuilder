import {makeFactory} from "../src";
import {WithoutConstructorParams, WithConstructorParams} from "./models";

describe('Factory', () => {
    const buildWithConstructor = (properties: Partial<WithConstructorParams>): WithConstructorParams => {
        const newWithConstructor = new WithConstructorParams(undefined!, undefined!, undefined!, undefined!)

        return {...newWithConstructor, ...properties};
    };

    it('build should create object', () => {
        const classWithConstructor = makeFactory(WithConstructorParams);
        const classWithoutConstructor = makeFactory(WithoutConstructorParams);

        expect(classWithConstructor.build()).toBeInstanceOf(WithConstructorParams);
        expect(classWithoutConstructor.build()).toBeInstanceOf(WithoutConstructorParams);
    })

    it('withProperties should set properties from args', () => {
        const expected = buildWithConstructor({ id: '1', title: 'test' });
        const result = makeFactory(WithConstructorParams).withProperties({ id: '1', title: 'test' }).build();

        expect(result).toEqual(expected);
    })

    it('randomizeParams() with "all" and "except" should throw ', () => {
        const resultTrue = () => makeFactory(WithConstructorParams).randomizeParams("all", true);
        const resultFalse = () => makeFactory(WithConstructorParams).randomizeParams("all", true);

        expect(resultFalse).toThrow();
        expect(resultTrue).toThrow();
    })

    it('randomizeParams(keyof T) should randomize property from args', () => {
        // const expected = buildWithConstructor({ amount: 42 });
        // const result = makeFactory(WithConstructorParams).randomizeParams('amount').build();
    })
})