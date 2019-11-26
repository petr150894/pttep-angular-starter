import { InjectionToken } from '@angular/core';

const translate = {
  home: {
    title: 'Home page'
  }
};

// tokens initializing

const TRANSLATE = new InjectionToken<object>('translate');

// export tokens and values

export {
  TRANSLATE, translate
};
