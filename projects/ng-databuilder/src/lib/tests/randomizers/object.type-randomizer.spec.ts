import {ObjectTypeRandomizer} from "../../features/randomizers/object.type-randomizer";

describe('RandomizerProvider', () => {
  it('should throw if randomize is called without original object', () => {
    expect(() => new ObjectTypeRandomizer({}).randomize({})).toThrow();
  })
})
