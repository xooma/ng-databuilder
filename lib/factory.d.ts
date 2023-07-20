declare class Factory<T> {
    private object;
    constructor(objectConstructor: new () => T);
    withProperties(properties: Partial<T>): Factory<T>;
    build(): T;
}
declare function makeFactory<T>(objectConstructor: new () => T): Factory<T>;
export { makeFactory };
