import { InjectionToken } from '@angular/core';

const ROUTING_PATHS = new InjectionToken<object>('routingPaths');

const routingPaths: any = {
  home: '',
  someListPagePath: 'some-page/:listId',
  addItem: 'add-item',
  editItem: 'edit-item/:id',
}; 

export { ROUTING_PATHS, routingPaths };
