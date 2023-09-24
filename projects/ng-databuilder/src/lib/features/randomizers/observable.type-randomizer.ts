import {TypeRandomizerModel} from "../../models/type-randomizer.model";
import {IRandomizerConfiguration} from "../../models/randomizer-configuration.interface";
import {isObservable, Observable, of} from "rxjs";

export class ObservableTypeRandomizer extends TypeRandomizerModel<Observable<unknown>> {
  constructor(config: IRandomizerConfiguration) {
    super(config);
  }

  override match(type: unknown): boolean {
    return isObservable(type);
  }

  randomize(): Observable<unknown> {
    return of();
  }
}
