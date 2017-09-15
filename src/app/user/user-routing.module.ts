/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UserComponent} from '../user/user.component';

import { UserJoinComponent } from '../user/user-join/user-join.component';
import { UserIntentionComponent } from '../user/user-intention/user-intention.component';
import { UserInfoComponent } from '../user/user-info/user-info.component';


const routes: Routes = [
  {
    path:'user',
    component:UserComponent,
    children:[
  {
    path: 'user_join',
    component: UserJoinComponent
  },
  {
    path: 'user_intention',
    component: UserIntentionComponent
  },
  {
    path: 'user_info',
    component: UserInfoComponent
  }
  ]
}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserRoutingModule {}
