import { Injectable, Inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { HTTP_STATUSES, httpStatuses } from '../enums/httpStatuses.enum';

@Injectable()
export class ServerErrorInterceptor implements HttpInterceptor {
  constructor(
    @Inject(HTTP_STATUSES) private httpStatusesEnum: typeof httpStatuses,
  ) { }

  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
      .do(
        (): void => { },
        err => {
          if (err instanceof HttpErrorResponse &&
            this.isServerError(err)) {
            this.showModalServerError(err);
          }
        },
      );
  }

  private isServerError(error: HttpErrorResponse): boolean {
    return error.status >= this.httpStatusesEnum.serverError;
  }

  private showModalServerError(err: HttpErrorResponse): void {
    console.error(err);
  }
}
