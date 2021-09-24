import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserInfoComponent } from './create-user-info/create-user-info.component';
import { UsersInfoComponent } from './users-info/users-info.component';

const routes: Routes = [
  {
    path: '',
    component: UsersInfoComponent,
  },
  {
    path: 'create',
    component: CreateUserInfoComponent,
  },
  {
    path: '*',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
