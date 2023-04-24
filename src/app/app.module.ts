import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistterationPageComponent } from './registteration-page/registteration-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ListUserComponent } from './list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistterationPageComponent,
    LoginPageComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
