import { Injectable, Inject } from '@angular/core';
import {
  Router,
  NavigationExtras,
} from '@angular/router';
import { ROUTING_PATHS } from '../constants/routingPaths.const';
import { NAVIGATION_PATHS } from '../constants/navigationPaths.const';

@Injectable()
export class NavigationService {
  constructor(
    private router: Router,
    @Inject(ROUTING_PATHS) private routingPaths: any,
    @Inject(NAVIGATION_PATHS) private navigationPaths: any,
  ) {
    this.copyRoutingPaths(this.navigationPaths, '');
  }

  public async navigate(path: string, params: object = {}, extras?: NavigationExtras): Promise<boolean> {
    const navPath: string = this.insertRouteParams(path, params);
    return this.router.navigate([navPath], extras);
  }

  private copyRoutingPaths(navigationObject: object, pathAccumulated: string): void {
    Object.keys(navigationObject).forEach(key => {
      const routingPath = this.routingPaths[key];
      const absolutePath = pathAccumulated ? `${pathAccumulated}/${routingPath}` : routingPath;

      if (typeof navigationObject[key] === 'object') {
        this.copyRoutingPaths(navigationObject[key], absolutePath);
      } else {
        navigationObject[key] = absolutePath;
      }
    });
  }

  private insertRouteParams(routePath: string, params: object): string {
    let path: string;
    Object.keys(params).forEach(key => {
      const paramsPlaceholder = `:${key}`;
      const paramValue = params[key];
      path = routePath.replace(paramsPlaceholder, paramValue);
    });

    return path;
  }
}
