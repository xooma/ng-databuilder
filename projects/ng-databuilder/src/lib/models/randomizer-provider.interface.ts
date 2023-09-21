import {ITypeRandomizer} from "./type-randomizer.model";
import {IRandomizerConfiguration} from "./randomizer-configuration.interface";

export interface IRandomizerProvider {
  getRandomizers(config?: IRandomizerConfiguration): Array<ITypeRandomizer>;
}
