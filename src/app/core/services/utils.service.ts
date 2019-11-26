import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  private window: Window = window;

  constructor(
  ) { }

  public interpolateString(source: string, props: object): string {
    return source.replace(/\{(\w+)\}/g, (match, expr) => {
      return props[expr];
    });
  }

  /**********     Helpers    *********/
  
  public debounce(callback: Function, delay: number, context: Record<string, any> = this): Function {
    let timeout;
    return (...args) => {
      const functionCall = (): void => callback.apply(context, args);
      clearTimeout(timeout);
      timeout = window.setTimeout(functionCall, delay);
    };
  }

  public throttle(callback: Function, delay: number, context: Record<string, any> = this): Function {
    let wait = false;
    return (...args) => {
      if (!wait) {
        callback.apply(context, args);
        wait = true;
        setTimeout(() => {
          wait = false;
        },         delay);
      }
    };
  }
}
