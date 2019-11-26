import {
  Injectable,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators/catchError';
import { environment } from '../../../environments/environment';
import {
  HttpHeaders,
  HttpClient,
} from '@angular/common/http';
import { UtilsService } from './utils.service';
import { API_URLS } from '../constants/apiUrls.const';

@Injectable()
export class ApiService {
  private requestOpts: object;

  constructor(
    private http: HttpClient,
    private utilsService: UtilsService,
    @Inject(API_URLS) private apiUrls: object,
  ) {
    this.requestOpts = {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/json; charset=utf-8'),
    };
  }

  public get<ResponseType>(
    path: string,
    urlParams: object = {},
  ): Observable<ResponseType> {
    const url = this.buildUrl(path, urlParams);

    return this.http.get<ResponseType>(
      url,
      this.requestOpts,
    ).pipe(
      catchError(this.formatErrors),
    );

  }

  public put<ResponseType>(
    path: string,
    urlParams: Record<string, any> = {},
    body: Record<string, any> = {},
  ): Observable<ResponseType> {
    const url = this.buildUrl(path, urlParams);

    return this.http.put(
      url,
      JSON.stringify(body),
      this.requestOpts,
    ).pipe(
      catchError(this.formatErrors),
    );
  }

  public patch<ResponseType>(
    path: string,
    urlParams: Record<string, any> = {},
    body: Record<string, any> = {},
  ): Observable<ResponseType> {
    const url = this.buildUrl(path, urlParams);

    return this.http.patch(
      url,
      JSON.stringify(body),
      this.requestOpts,
    ).pipe(
      catchError(this.formatErrors),
    );
  }

  public post<ResponseType>(
    path: string,
    urlParams: Record<string, any> = {},
    body: Record<string, any> = {},
  ): Observable<ResponseType> {
    const url = this.buildUrl(path, urlParams);

    return this.http.post(
      url,
      JSON.stringify(body),
      this.requestOpts,
    ).pipe(
      catchError(this.formatErrors),
    );
  }

  public delete<ResponseType>(
    path: string,
    urlParams: Record<string, any> = {},
  ): Observable<ResponseType> {
    const url = this.buildUrl(path, urlParams);

    return this.http.delete(
      url,
      this.requestOpts,
    ).pipe(
      catchError(this.formatErrors),
    );
  }

  public uploadFiles<ResponseType>(
    path: string,
    urlParams: Record<string, any> = {},
    files: Map<string, File>,
  ): Observable<ResponseType> {
    const url = this.buildUrl(path, urlParams);
    const formData: FormData = new FormData();

    files.forEach((file, key) => {
      formData.append(key, file, file.name);
    });

    return this.http.post(
      url,
      formData,
    ).pipe(
      catchError(this.formatErrors),
    );
  }

  public downloadAsBlob(
    path: string,
    urlParams: Record<string, any> = {},
  ): Observable<Blob> {
    const url = this.buildUrl(path, urlParams);

    return this.http.get(
      url,
      { responseType: 'blob' },
    ).pipe(
      catchError(this.formatErrors),
    );
  }

  public buildUrl(url: string, props: object): string {
    const absoluteUrl = `${environment.baseUrl}${url}`;
    return this.utilsService.interpolateString(absoluteUrl, props);
  }

  private formatErrors(error: any): ErrorObservable<any> {
    return new ErrorObservable(error);
  }

}
