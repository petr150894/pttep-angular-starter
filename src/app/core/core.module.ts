import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiService } from './services/api.service';
import { UtilsService } from './services/utils.service';
import { API_URLS, apiUrls } from './constants/apiUrls.const';
import { ROUTING_PATHS, routingPaths } from './constants/routingPaths.const';
import { NAVIGATION_PATHS, navigationPaths } from './constants/navigationPaths.const';
import { TRANSLATE,translate } from './constants/translate.const';
import { HTTP_STATUSES,httpStatuses, } from './enums/httpStatuses.enum';
import { ServerErrorInterceptor } from './interceptors/serverError.interceptor';
import { AppHeaderService } from './services/appHeader.service';
import { NavigationService } from './services/navigation.service';


const PROVIDERS = [
  ApiService,
  UtilsService,
  AppHeaderService,
  NavigationService,
  {
    provide: HTTP_STATUSES,
    useValue: httpStatuses,
  },
  {
    provide: API_URLS,
    useValue: apiUrls,
  },
  {
    provide: ROUTING_PATHS,
    useValue: routingPaths,
  },
  {
    provide: NAVIGATION_PATHS,
    useValue: navigationPaths,
  },
  {
    provide: TRANSLATE,
    useValue: translate,
  },
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ServerErrorInterceptor,
    multi: true,
  },
];

@NgModule({
  imports: [CommonModule],
  providers: [
    ...PROVIDERS,
  ],
  declarations: [],
})
export class CoreModule { }
