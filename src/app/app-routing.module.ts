import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {  path: '', pathMatch: 'full', redirectTo: 'sign-up'},
  { path: 'main', component: MainPageComponent},
  { path: 'sign-up', component: SignUpComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
