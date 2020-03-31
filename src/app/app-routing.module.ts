import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { TypographyComponent } from './pages/typography/typography.component';
import { GamesComponent } from './pages/games/games/games.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';
import { EditGameComponent } from './pages/games/editgame/editgame.component';

const routes: Routes = [
  {path: '',   redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forms', component: FormsComponent},
  {path: 'tables', component: TablesComponent},
  {path: 'typography', component: TypographyComponent},
  {path: 'games', component: GamesComponent},
  {path: 'games/edit/:id', component: EditGameComponent},
  {path: 'notifications', component: NotificationsComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
