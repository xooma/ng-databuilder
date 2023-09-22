import {IFactory} from "./models/factory.interface";
import {IRandomizerProvider} from "./models/randomizer-provider.interface";
import {ITypeRandomizer} from "./models/type-randomizer.model";
import {RandomizerProvider} from "./providers/randomizer.providers";
import {CustomHttpResponse} from "./features/http-response/custom-http-response";

class Factory<T extends object> implements IFactory<T> {
  private _object: T;
  private _randomizers: Array<ITypeRandomizer>;

  constructor(object: T, private _randomizerProvider: IRandomizerProvider) {
    this._randomizers = this._randomizerProvider.getRandomizers();
    this._object = {...object};
  }

  withProperties(properties: Partial<T>): IFactory<T> {
    this._object = {...this._object, ...properties};

    return this;
  }

  randomizeParams<K extends keyof T>(param?: K | Array<K>): IFactory<T> {
    if (!param) {
      return this.randomizeAll();
    }

    const params = Array.isArray(param) ? param : [param];

    for (const key of params) {
      this.checkTypeMismatch<K>(key);

      this._object = { ...this._object, [key]: this.randomize(key) };
    }

    return this;
  }

  private checkTypeMismatch<K extends keyof T>(key: K) {
    const currentValue = this._object[key];
    const targetType = typeof this.randomize(key);

    if (typeof currentValue !== targetType) {
      throw new Error(`Type mismatch for property '${key.toString()}'. Expected '${targetType}', but got '${typeof currentValue}'.`);
    }
  }

  private randomizeAll() {
    for (const key in this._object) {
      if (this._object.hasOwnProperty(key)) {
        this._object = { ...this._object, [key]: this.randomize(key) };
      }
    }

    return this;
  }

  toHttpResponse() {
    return new CustomHttpResponse<T>();
  }

  build(): T {
    return this._object;
  }

  private randomize<K extends keyof T>(param: K) {
    if (this._object[param] === undefined) {
      throw new Error(`Cannot determine type of undefined value.`);
    }

    const randomizer = this._randomizers.find(r => r.match((this._object[param])));

    if (!randomizer) {
      throw new Error(`${typeof this._object[param]} cannot be randomized.`);
    }

    return randomizer.randomize();
  }
}

function makeFactoryFrom<T extends object>(object: T): IFactory<T> {
  return new Factory<T>(object, new RandomizerProvider());
}

export {makeFactoryFrom}
