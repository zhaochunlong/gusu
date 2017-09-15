/**
 * Created by Administrator on 2017/9/12 0012.
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//注册子组件
import { UserJoinComponent } from '../user/user-join/user-join.component';
import { UserIntentionComponent } from '../user/user-intention/user-intention.component';
// import { UserInfoComponent } from '../user/user-info/user-info.component';
//注册父组件
import {UserComponent} from "./user.component";

//导入路由模块
import {UserRoutingModule} from "./user-routing.module";
import { UserResumeComponent } from './user-info/user-resume/user-resume.component';
import {UserInfoRoutingModule} from "./user-info/user-info-routing.module";
import {UserInfoModule} from "./user-info/user-info.module";


@NgModule({
  declarations: [
    UserJoinComponent,//报名参加组件
    UserIntentionComponent,//用户意向组件
    // UserInfoComponent,//用户信息组件
    UserComponent,//用户模块
    // UserResumeComponent//用户简历模块
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UserInfoModule,//
    UserRoutingModule//个人中心路由模块
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
