import {IRandomizerConfiguration} from "./randomizer-configuration.interface";
import {ITypeRandomizer} from "./type-randomizer.interface";

export abstract class TypeRandomizerModel<T> implements ITypeRandomizer {
  _type!: string | (new () => T);
  readonly _config: IRandomizerConfiguration;

  protected constructor(config: IRandomizerConfiguration) {
    this._config = config;
  }

  abstract randomize(): T;
  match(type: unknown): boolean {
    return typeof type === this._type;
  }
}
