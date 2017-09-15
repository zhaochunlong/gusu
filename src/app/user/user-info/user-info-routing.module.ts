/**
 * Created by Administrator on 2017/9/13 0013.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//导入子组件
import {UserChangePasswordComponent} from './user-change-password/user-change-password.component';
import {UserResumeComponent} from './user-resume/user-resume.component';
//导入父组件
import {UserInfoComponent} from './user-info.component';

//配置路由
const routes: Routes = [
  {
    path:'user_info',
    component:UserInfoComponent,
    children:[
      {
        path: 'user_change_password',
        component: UserChangePasswordComponent
      },
      {
        path: 'user_resume',
        component: UserResumeComponent
      }
     ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class UserInfoRoutingModule {}
