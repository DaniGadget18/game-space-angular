import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { GamesComponent } from './pages/games/games/games.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { EditGameComponent } from './pages/games/editGame/editGame.component';
import { CreateGameComponent } from './pages/games/createGame/createGame.component';
import {LoginComponent} from './components/login/login.component';
import {LoginGuard} from './login.guard';
import { UsersComponent } from './pages/users/users/users.component';

const routes: Routes = [
  {path: '',   redirectTo: '/dashboard', pathMatch: 'full', canActivate: [LoginGuard]},
  {path: 'dashboard', component: DashboardComponent , canActivate: [LoginGuard]},
  {path: 'forms', component: FormsComponent , canActivate: [LoginGuard]},
  {path: 'tables', component: TablesComponent , canActivate: [LoginGuard]},
  {path: 'typography', component: TypographyComponent , canActivate: [LoginGuard]},
  {path: 'notifications', component: NotificationsComponent , canActivate: [LoginGuard]},
  {path: 'games', component: GamesComponent},
  {path: 'games/create', component: CreateGameComponent},
  {path: 'games/edit/:id', component: EditGameComponent},
  {path: 'users', component: UsersComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/dashboard', canActivate: [LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
