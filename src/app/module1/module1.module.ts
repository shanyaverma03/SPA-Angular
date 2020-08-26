import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { LoginComponent } from './login/login.component';

import {FormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { SearchComponent } from './search/search.component';
import { LogoutComponent } from './logout/logout.component';
import {MatButtonModule} from '@angular/material/button';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [HeaderComponent, LoginComponent, SearchComponent, LogoutComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatMenuModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
 
  
  ],
  exports: [
    HeaderComponent, LoginComponent, FooterComponent
  ]
})
export class Module1Module { }
