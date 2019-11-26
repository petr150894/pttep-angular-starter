import { InjectionToken } from '@angular/core';

const NAVIGATION_PATHS = new InjectionToken<object>('navigationPaths');

const navigationPaths = {
  login: '',
  someListPagePath: {
    addItem: '',
    editItem: '',
  },
};

export { NAVIGATION_PATHS, navigationPaths };
