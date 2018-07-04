import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ProfileComponent } from "./profile/profile.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { ShowProfileComponent } from './show-profile/show-profile.component';

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent },
  { path: "profile", component: ProfileComponent },
  { path: "show-profile", component: ShowProfileComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  { path: "**", component: NotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HomeComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    NotFoundComponent,
    ShowProfileComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
