import {TypeRandomizerModel} from "../../models/type-randomizer.model";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";

export class StringTypeRandomizer extends TypeRandomizerModel<string> {
  constructor(config: IRandomizerConfiguration) {
    super(config);
    this._type = "string";
  }

  randomize(): string {
    return "Random_string";
  }
}