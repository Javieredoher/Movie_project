import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './COMPONENTS/add/add.component';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { ModifyComponent } from './COMPONENTS/modify/modify.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'add', component: AddComponent},
  {path:'edit/:mov_id', component: ModifyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
