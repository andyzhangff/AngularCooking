import { GetCategoryService } from './myservice/category/get-category.service';
import { FileUploadService } from './create-user/file-upload.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import{LoginService} from './login/login.service';
import{RegisterService} from './register/register.service';
import{CrudService} from './myservice/CRUD/crud.service'
import { RegisterComponent } from './register/register.component';
import {httpInterceptorProviders} from './myservice/http-interceptors/index';
import { UpdateComponent } from './update/update.component';
import { CategoryComponent } from './category/category.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthService } from './myservice/guard/auth.service';
import { CreateReceipeComponent } from './create-receipe/create-receipe.component';
import { NavbarComponent } from './navbar/navbar.component';
import {SearchContentService} from './navbar/search-content.service';
import { CreateUserComponent } from './create-user/create-user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { RouteHallComponent } from './route-hall/route-hall.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { IngrediantRemoveComponent } from './create-receipe/ingrediant-remove/ingrediant-remove.component';
import { DragDropFileUploadDirective } from './create-receipe/drag-drop-file-upload.directive';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { HighlightDirective } from './create-receipe/highlight.directive';
import {ReceipeUploadService} from './create-receipe/receipe-upload.service';
import { StepRemoveComponent } from './create-receipe/step-remove/step-remove.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UpdateComponent,
    CategoryComponent,
    CreateReceipeComponent,
    NavbarComponent,
    CreateUserComponent,
    UsersListComponent,
    RouteHallComponent,
    IngrediantRemoveComponent,
    DragDropFileUploadDirective,
    HighlightDirective,
    StepRemoveComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule ,
    MatProgressBarModule,
    DragDropModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
  ],
  providers: [
    LoginService,
    RegisterService,
    CrudService,
    httpInterceptorProviders,
    AuthService,
    SearchContentService,
    FileUploadService,
    GetCategoryService,
    ReceipeUploadService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
