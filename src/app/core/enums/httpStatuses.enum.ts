import { InjectionToken } from '@angular/core';

enum httpStatuses {
  noResponse = 0,
  unauthorized = 401,
  forbidden = 403,
  notAcceptable = 406,
  clientError = 400,
  notFound = 404,
  serverError = 500,
}

const HTTP_STATUSES = new InjectionToken<object>('httpStatuses');

export { HTTP_STATUSES, httpStatuses };
