import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistterationPageComponent } from './registteration-page/registteration-page.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  {path:'' , component:LoginPageComponent},
  {path:'register' , component:RegistterationPageComponent},
  {path:'user-list' , component:ListUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
