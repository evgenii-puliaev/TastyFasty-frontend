import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegistrationPageComponent} from './pages/registration/registration-page.component';
import {MyAccountComponent} from './pages/my-account/my-account.component';
import {BasketPageComponent} from './pages/basket-pages/pages/basket-page/basket-page.component';
import {HomePageComponent} from "./pages/home-pages/pages/home-page/home-page.component";
import {OrdersPageComponent} from "./pages/order-pages/pages/orders-page/orders-page.component";


const routes: Routes = [
  {
    path: '',
    loadChildren:() => import('./pages/home-pages/home-pages.module').then(m => m.HomePagesModule)
  },
  {
    path: 'orders',
    loadChildren:() => import('./pages/order-pages/order-pages.module').then(m => m.OrderPagesModule)
  },
  {
    path: 'restaurant',
    loadChildren: () => import('./pages/restaurant-pages/restaurant-pages.module').then(m => m.RestaurantPagesModule)
  },
  {
    path: 'basket',
    component: BasketPageComponent
  },
  {
    path: 'my-account',
    component: MyAccountComponent
  },
  {
    path: 'registration',
    component: RegistrationPageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth-pages/auth-pages.module').then(m => m.AuthPagesModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
