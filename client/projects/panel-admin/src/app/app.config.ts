import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { HTTP_INTERCEPTORS, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { AuthInterceptor } from './core/interceptors/auth-interceptor';
import { provideHotToastConfig } from '@ngneat/hot-toast';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHotToastConfig(),
    provideHttpClient(
      withFetch(),
      withInterceptorsFromDi(),

      ),
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    ],
};
