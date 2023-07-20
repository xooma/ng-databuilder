/* eslint @typescript-eslint/no-explicit-any: 0 */

type Constructor<T> = new (...args: any) => T

class Factory<T extends object> {
    private readonly _objectConstructor: Constructor<T>;
    private _object: T;
    private _isBuilt = false;

    constructor(objectConstructor: Constructor<T>) {
        this._objectConstructor = objectConstructor;
    }

    withProperties(properties: Partial<T>): Factory<T> {
        this._object = {...this._object, ...properties};
        this._isBuilt = true;

        return this;
    }

    randomizeParams<K extends keyof T>(params: K | Array<K> | 'all', except?: boolean): Factory<T> {
        if (params === 'all' && typeof except === 'boolean') {
            throw new Error('Arguments "all" and "except" cannot be used together');
        }
        // this._object = { ...this._object, [key]: { ...this._object[key], ...value } };

        return this;
    }

    build(): T {
        if (!this._isBuilt) {
            this._object = new this._objectConstructor();
            this._isBuilt = true;
        }

        return this._object;
    }
}

function makeFactory<T extends object>(objectConstructor: Constructor<T>): Factory<T> {
    return new Factory<T>(objectConstructor);
}

export { makeFactory }