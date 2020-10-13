import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  I18NextModule,
  ITranslationService,
  I18NEXT_SERVICE,
  I18NextTitle,
  defaultInterpolationFormat,
} from 'angular-i18next';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material-module';

export function appInit(i18next: ITranslationService) {
  return () =>
    i18next.init({
      lng: 'en',
      debug: true,
      resources: {
        en: {
          translation: {
            "welcome": 'Bienvenido Welcome',
          },
        },
      },
    });
}

export function localeIdFactory(i18next: ITranslationService) {
  return i18next.language;
}

export const I18N_PROVIDERS = [
  {
    provide: APP_INITIALIZER,
    useFactory: appInit,
    deps: [I18NEXT_SERVICE],
    multi: true,
  },
  {
    provide: LOCALE_ID,
    deps: [I18NEXT_SERVICE],
    useFactory: localeIdFactory,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    I18NextModule.forRoot(),
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [I18N_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}
