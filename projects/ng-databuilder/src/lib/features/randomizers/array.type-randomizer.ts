import {TypeRandomizerModel} from "../../models/type-randomizer.model";
import {DateTypeRandomizer} from "./date.type-randomizer";
import {StringTypeRandomizer} from "./string.type-randomizer";
import {NumberTypeRandomizer} from "./number.type-randomizer";
import {BooleanTypeRandomizer} from "./boolean.type-randomizer";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";

export class ArrayTypeRandomizer extends TypeRandomizerModel<Array<unknown>> {
  private _array: Array<unknown> | undefined;
  private _randomizers: Array<TypeRandomizerModel<unknown>> | undefined;

  constructor(config: IRandomizerConfiguration) {
    super(config);
  }

  override match(value: unknown): boolean {
    if (Array.isArray(value) && value.length === 0) {
      throw new Error('Cannot randomize an empty array.');
    }

    const isArrayOfUniqueType = (value as Array<unknown>).every((value, _index, array) => typeof value === typeof array[0]);

    if (!isArrayOfUniqueType) {
      throw new Error('Cannot randomize an array with different element types.');
    }

    if (Array.isArray(value)) {
      this._array = value;
      this._randomizers = [
        new DateTypeRandomizer(this._config),
        new StringTypeRandomizer(this._config),
        new NumberTypeRandomizer(this._config),
        new BooleanTypeRandomizer(this._config),
        this
      ]
    }

    return Array.isArray(value);
  }

  randomize(): Array<unknown> {
    const randomizer = this._randomizers!.find(r => r.match(this._array![0]));

    if (!randomizer) {
      throw new Error(`${typeof this._array![0]} cannot be randomized.`);
    }

    return [randomizer.randomize()];
  }
}
