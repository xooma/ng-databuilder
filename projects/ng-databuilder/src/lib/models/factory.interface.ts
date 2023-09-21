import {CustomHttpResponse} from "../features/http-response/custom-http-response";

export interface IFactory<T> {
  withProperties(properties: Partial<T>): IFactory<T>;
  randomizeParams<K extends keyof T>(param: K | Array<K>): IFactory<T>;
  toHttpResponse(): CustomHttpResponse<T>;
  build(): T;
}