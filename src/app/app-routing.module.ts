import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { GamesComponent } from './pages/games/games/games.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { EditGameComponent } from './pages/games/editGame/editGame.component';
import { CreateGameComponent } from './pages/games/createGame/createGame.component';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './login.guard';
import { UsersComponent } from './pages/users/users/users.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { StatusOrderComponent } from './pages/status-order/status-order.component';
import { RefoundComponent } from './pages/refound/refound.component';

const routes: Routes = [
  {path: '',   redirectTo: '/dashboard', pathMatch: 'full', canActivate: [LoginGuard]},
  {path: 'dashboard', component: DashboardComponent , canActivate: [LoginGuard]},
  {path: 'forms', component: FormsComponent , canActivate: [LoginGuard]},
  {path: 'tables', component: TablesComponent , canActivate: [LoginGuard]},
  {path: 'notifications', component: NotificationsComponent , canActivate: [LoginGuard]},

  // Rutas de la app
  {path: 'refound', component: RefoundComponent, canActivate:[LoginGuard]},
  {path: 'games', component: GamesComponent, canActivate:[LoginGuard]},
  {path: 'games/create', component: CreateGameComponent, canActivate:[LoginGuard]},
  {path: 'games/edit/:id', component: EditGameComponent, canActivate:[LoginGuard]},
  {path: 'users', component: UsersComponent, canActivate:[LoginGuard]},
  {path: 'users/edit/:id', component: EditUserComponent, canActivate:[LoginGuard]},
  {path: 'orders', component: OrdersComponent, canActivate:[LoginGuard]},
  {path: 'orders/status/:id', component: StatusOrderComponent, canActivate:[LoginGuard]},
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/dashboard', canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
