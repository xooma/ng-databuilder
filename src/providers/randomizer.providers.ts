import {IRandomizerProvider} from "../models/randomizer-provider.interface";
import {ITypeRandomizer} from "../models/type-randomizer.model";
import {DateTypeRandomizer} from "../features/randomizers/date.type-randomizer";
import {StringTypeRandomizer} from "../features/randomizers/string.type-randomizer";
import {NumberTypeRandomizer} from "../features/randomizers/number.type-randomizer";
import {BooleanTypeRandomizer} from "../features/randomizers/boolean.type-randomizer";
import {ArrayTypeRandomizer} from "../features/randomizers/array.type-randomizer";
import {IRandomizerConfiguration} from "../models/randomizer-configuration.interface";


export class RandomizerProvider implements IRandomizerProvider {
  getRandomizers(config: IRandomizerConfiguration = {}): Array<ITypeRandomizer> {
    // TODO: create default configuration
    return [
      new DateTypeRandomizer(config),
      new StringTypeRandomizer(config),
      new NumberTypeRandomizer(config),
      new BooleanTypeRandomizer(config),
      new ArrayTypeRandomizer(config),
    ];
  }
}