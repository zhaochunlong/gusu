import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


//导入其他组件
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
// import { PositionComponent } from './position/position.component';
import { SpyComponent } from './spy/spy.component';
// import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistComponent } from './regist/regist.component';
import {PositionModule} from './position/positon.module';
import {SpyModule} from './spy/spy.module';
import{AppRoutingModule} from './app-routing.module';
import { PositionTitleComponent } from './position-title/position-title.component';
import { CompanyTitleComponent } from './company-title/company-title.component';
import { SpyDetailComponent } from './spy-detail/spy-detail.component';
// import { UserJoinComponent } from './user/user-join/user-join.component';
// import { UserIntentionComponent } from './user/user-intention/user-intention.component';
// import { UserInfoComponent } from './user/user-info/user-info.component';
import {UserModule} from "./user/user.module";




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    // PositionComponent,
    SpyComponent,
    // UserComponent,
    PageNotFoundComponent,
    LoginComponent,
    RegistComponent,
    PositionTitleComponent,
    CompanyTitleComponent,
    SpyDetailComponent,
    // UserJoinComponent,
    // UserIntentionComponent,
    // UserInfoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    PositionModule, //职位模块
    SpyModule,//公司模块
    UserModule,//用户模块
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
