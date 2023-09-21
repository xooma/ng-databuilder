import {TypeRandomizerModel} from "../../models/type-randomizer.model";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";

export class ObjectTypeRandomizer extends TypeRandomizerModel<object> {
  constructor(config: IRandomizerConfiguration) {
    super(config);
    this._type = "object";
  }

  randomize(object?: unknown): object {
    console.log(object);

    return {};
  }
}