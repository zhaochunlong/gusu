/**
 * Created by Administrator on 2017/9/13 0013.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//注册组件
import {UserChangePasswordComponent} from './user-change-password/user-change-password.component';
import {UserResumeComponent} from './user-resume/user-resume.component';
import {UserInfoComponent} from './user-info.component';


//导入路由模块
import {UserInfoRoutingModule} from './user-info-routing.module';

@NgModule({
  declarations: [
    UserChangePasswordComponent,
    UserResumeComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserInfoRoutingModule//个人简历路由模块
  ],
  providers: [],
  bootstrap: [UserInfoComponent]
})
export class UserInfoModule { }
