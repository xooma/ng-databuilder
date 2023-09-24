import {IRandomizerConfiguration} from "./randomizer-configuration.interface";
import {ITypeRandomizer} from "./type-randomizer.interface";

export abstract class DeepTypeRandomizerModel<T> implements ITypeRandomizer {
  _type!: string | (new () => T);
  readonly _config: IRandomizerConfiguration;

  protected constructor(config: IRandomizerConfiguration) {
    this._config = config;
  }

  abstract randomize(object: unknown): T;
  match(type: unknown): boolean {
    return typeof type === this._type;
  }
}
