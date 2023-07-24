import {TypeRandomizerModel} from "../../models/type-randomizer.model";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";

export class BooleanTypeRandomizer extends TypeRandomizerModel<boolean> {
  constructor(config: IRandomizerConfiguration) {
    super(config);
    this._type = "boolean";
  }
  randomize(): boolean {
    return Math.random() < 0.5;
  }
}