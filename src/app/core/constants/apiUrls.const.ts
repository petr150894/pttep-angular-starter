import { InjectionToken } from '@angular/core';

const API_URLS = new InjectionToken<object>('apiUrls');

const apiUrls = {
  someApiUrl: 'api/url',
  someCRUDApiUrl: {
    getAll: 'api/rest/getAll',
    post: 'api/rest/post',
    get: 'api/rest/get/{id}',
    put: 'api/rest/put/{id}',
  },
};

export { API_URLS, apiUrls };
