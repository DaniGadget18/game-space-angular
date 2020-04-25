// modulos de la app
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { ChartsModule } from 'ng2-charts';


// componentes del cascaron
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TablesComponent } from './pages/tables/tables.component';
import { FormsComponent } from './pages/forms/forms.component';
import { NotificationsComponent } from './pages/notifications/notifications.component';

// componenente login
import { LoginComponent } from './components/login/login.component';
// Componentes de la aplicacion
import { GamesComponent } from './pages/games/games/games.component';
import { EditGameComponent } from './pages/games/editGame/editGame.component';
import {LoginGuard} from './login.guard';
import { CreateGameComponent } from './pages/games/createGame/createGame.component';
import { UsersComponent } from './pages/users/users/users.component';
import { EditUserComponent } from './pages/users/edit-user/edit-user.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { StatusOrderComponent } from './pages/status-order/status-order.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TablesComponent,
    FormsComponent,
    NotificationsComponent,
    GamesComponent,
    LoginComponent,
    EditGameComponent,
    CreateGameComponent,
    UsersComponent,


    
    EditUserComponent,
    OrdersComponent,
    StatusOrderComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ChartsModule,
    CollapseModule.forRoot(),
    ToastrModule.forRoot()
    ],
  providers: [
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
