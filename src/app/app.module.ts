import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import {AuthGuard} from './guards/auth.guard';
import {AuthTokenInterceptor} from './helpers/auth.interceptor';
import {NgxSpinnerModule} from 'ngx-spinner';
import {DuenoModule} from './dueno/dueno.module';
import {CommonsResourcesModule} from './commons/commons-resources.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {SysAdminIntraModule} from './sys-admin-intra/sys-admin-intra.module';
import { AgmCoreModule } from '@agm/core';
import {ServicioModule} from './servicio/servicio.module';
import {ClienteIntraModule} from './cliente-intra/cliente-intra.module';
import {StarRatingModule} from 'angular-star-rating';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    NgxSpinnerModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    DuenoModule,
    SysAdminIntraModule,
    ClienteIntraModule,
    CommonsResourcesModule,
    ServicioModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBxD9Rcgv2HpCsnjCNcCNUZEswZZYPm23s'
    })
    StarRatingModule.forRoot(),
  ],
  providers: [
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: AuthTokenInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
