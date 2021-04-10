import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { DeleteComponent } from './users/delete/delete.component';
import { UpdateComponent } from './users/update/update.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { path: 'users', component: UsersComponent},
  { path: 'user/create', component: CreateUserComponent},
  { path: 'landingpage', component: LandingpageComponent},
  { path: 'user/update/:id', component: UpdateComponent},
  { path: 'user/delete/:id', component: DeleteComponent},
  { path: '', pathMatch:'full', redirectTo:'/landingpage'}
]
  


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
