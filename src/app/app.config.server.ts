import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { ProductService } from './Services/product.service';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(), ProductService
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
