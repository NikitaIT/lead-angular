import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import { ShopComponent } from './shop/shop.component';
import { ReactComponent } from './react/react.component';

export const appRoutes: Route[] = [
  {
    path: 'feature-a',
    loadChildren: () =>
      import('feature-a/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
  {
    path: 'react',
    component: ReactComponent,
  },
  {
    path: 'cart',
    loadChildren: () => import('@lead-angular/cart').then((m) => m.CartModule),
  },
  {
    path: '**',
    component: ShopComponent,
  },
];
