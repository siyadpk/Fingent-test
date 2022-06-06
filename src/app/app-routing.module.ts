import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayformComponent } from './pages/displayform/displayform.component';
import { RegistrationformComponent } from './pages/registrationform/registrationform.component';

const routes: Routes = [
  {
    path:"",
    component:RegistrationformComponent
  },
  {
    path:"displayData",
    component:DisplayformComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
