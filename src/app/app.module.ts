import { AuthorizationComponent } from './authorization/authorization.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JwtInterceptor } from './authorization/Jwt-interceptor.interceptor';
// header components
import { HeaderComponent } from './header/header.component';
import { LoginMenuComponent } from './header/login-menu/login-menu.component';
import { MenuComponent } from './header/menu/menu.component';
import { SearchMenuComponent } from './header/search-menu/search-menu.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';
import { MaterialModule } from './material';
import { AppRoutingModule } from './app-routing.module';
import { UserNotificationsMenuComponent } from './header/user-notifications-menu/user-notifications-menu.component';


@NgModule({
  declarations: [
    AppComponent,

    // header
    HeaderComponent,
    LoginMenuComponent,
    MenuComponent,
    SearchMenuComponent,

    UserMenuComponent,
    UserNotificationsMenuComponent,

    // authorization
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //HttpClientModule,
    MaterialModule,
    //FormsModule,

  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
