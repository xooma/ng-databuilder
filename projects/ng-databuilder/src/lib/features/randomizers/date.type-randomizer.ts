import {TypeRandomizerModel} from "../../models/type-randomizer.model";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";

export class DateTypeRandomizer extends TypeRandomizerModel<Date> {
  constructor(config: IRandomizerConfiguration) {
    super(config);
    this._type = Date;
  }

  override match(type: unknown): boolean {
    return type instanceof Date;
  }

  randomize(): Date {
    return new Date();
  }
}
