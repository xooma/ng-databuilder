import {IRandomizerConfiguration} from "./randomizer-configuration.interface";

export interface ITypeRandomizer {
  _type: string | (new () => unknown);
  randomize(): unknown;
  match(type: unknown): boolean;
}

export abstract class TypeRandomizerModel<T> implements ITypeRandomizer {
  _type!: string | (new () => T);
  readonly _config: IRandomizerConfiguration;

  protected constructor(config: IRandomizerConfiguration) {
    this._config = config;
  }

  abstract randomize(config?: IRandomizerConfiguration): T;
  match(type: unknown): boolean {
    return typeof type === this._type;
  }
}
