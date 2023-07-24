import {TypeRandomizerModel} from "../../models/type-randomizer.model";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";

export class NumberTypeRandomizer extends TypeRandomizerModel<number> {
  constructor(config: IRandomizerConfiguration) {
    super(config);
    this._type = "number";
  }

  randomize(): number {
    return Math.random();
  }
}