import {HttpHeaders, HttpResponse} from "@angular/common/http";

export class CustomHttpResponse<T> {
  private _httpResponse: HttpResponse<T>;

  constructor() {
    this._httpResponse = new HttpResponse<T>();
  }

  withStatus(status: number): CustomHttpResponse<T> {
    this._httpResponse = this._httpResponse.clone({ status });

    return this;
  }

  withHeaders(headers: HttpHeaders | { [header: string]: string | string[] }): CustomHttpResponse<T> {
    this._httpResponse = this._httpResponse.clone({ headers: new HttpHeaders({ ...headers }) });

    return this;
  }

  withBody(body: T | null): CustomHttpResponse<T> {
    this._httpResponse = this._httpResponse.clone({ body });

    return this;
  }

  build(): HttpResponse<T> {
    return this._httpResponse;
  }
}