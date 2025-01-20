import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import MyLaraLightBluePreset from './estilo';
import { fr } from "primelocale/fr.json"



export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideAnimationsAsync(),provideHttpClient(withFetch()),
    providePrimeNG({
      translation: fr,
        theme: {
          preset: MyLaraLightBluePreset,
          options: {
              darkModeSelector: '.my-app-dark'
          }
        }
    })
    ]
};
