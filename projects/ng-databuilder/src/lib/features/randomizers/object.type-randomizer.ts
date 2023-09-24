import {makeFactoryFrom} from "../../factory";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";
import {DeepTypeRandomizerModel} from "../../models/deep-type-randomizer.model";

export class ObjectTypeRandomizer extends DeepTypeRandomizerModel<object> {
  constructor(config: IRandomizerConfiguration) {
    super(config);
    this._type = "object";
  }

  randomize(object: unknown): object {
    if (!object || Object.keys(object).length === 0) {
      throw new Error('Cannot randomize an empty object.');
    }

    return makeFactoryFrom(object!).randomizeParams().build();
  }
}
