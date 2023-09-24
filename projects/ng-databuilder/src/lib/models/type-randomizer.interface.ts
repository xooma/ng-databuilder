export interface ITypeRandomizer {
  _type: string | (new () => unknown);
  randomize(arg?: unknown): unknown;
  match(type: unknown): boolean;
}
