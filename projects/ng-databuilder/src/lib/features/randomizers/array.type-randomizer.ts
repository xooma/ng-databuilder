import {TypeRandomizerModel} from "../../models/type-randomizer.model";
import {DateTypeRandomizer} from "./date.type-randomizer";
import {StringTypeRandomizer} from "./string.type-randomizer";
import {NumberTypeRandomizer} from "./number.type-randomizer";
import {BooleanTypeRandomizer} from "./boolean.type-randomizer";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";
import {ObjectTypeRandomizer} from "./object.type-randomizer";
import {ObservableTypeRandomizer} from "./observable.type-randomizer";
import {ITypeRandomizer} from "../../models/type-randomizer.interface";

export class ArrayTypeRandomizer extends TypeRandomizerModel<Array<unknown>> {
  private _array: Array<unknown> | undefined;
  private _randomizers!: Array<ITypeRandomizer>;

  constructor(config: IRandomizerConfiguration) {
    super(config);
  }

  override match(value: unknown): boolean {

    if (Array.isArray(value)) {
      this._array = value;
      this._randomizers = [
        new DateTypeRandomizer(this._config),
        new StringTypeRandomizer(this._config),
        new NumberTypeRandomizer(this._config),
        new BooleanTypeRandomizer(this._config),
        new ObservableTypeRandomizer(this._config),
        new ObjectTypeRandomizer(this._config),
        this
      ]
    }

    return Array.isArray(value);
  }

  randomize(): Array<unknown> {
    const isArrayOfUniqueType = (this._array as Array<unknown>).every((value, _index, array) => typeof value === typeof array[0]);

    if (!isArrayOfUniqueType) {
      throw new Error('Cannot randomize an array with different element types.');
    }

    if (this._array!.length === 0) {
      throw new Error('Cannot randomize an empty array.');
    }

    const randomizer = this._randomizers.find(r => r.match(this._array![0]));

    if (!randomizer) {
      throw new Error(`${typeof this._array![0]} cannot be randomized.`);
    }

    return [randomizer.randomize(this._array![0])];
  }
}
