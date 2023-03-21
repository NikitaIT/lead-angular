import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { ShopComponent } from './shop/shop.component';
import { SharedUiModule } from '@lead-angular/shared/ui';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShopComponent],
  imports: [
    BrowserModule,
    SharedUiModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
