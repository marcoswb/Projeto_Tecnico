import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'
import { BsDropdownModule } from 'ngx-bootstrap/dropdown'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-bootstrap/carousel'
import { HttpClientModule } from '@angular/common/http'
import { ModalModule } from 'ngx-bootstrap/modal'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CarouselComponent } from './carousel/carousel.component'
import { FormComponent } from './form/form.component'
import { AddUserComponent } from './add-user/add-user.component'
import { EditUserComponent } from './edit-user/edit-user.component'
import { ListUsersComponent } from './list-users/list-users.component'
import { HomeComponent } from './home/home.component'
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component'


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    FormComponent,
    AddUserComponent,
    EditUserComponent,
    ListUsersComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    HttpClientModule,
    ModalModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
