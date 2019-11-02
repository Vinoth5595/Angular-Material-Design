import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './angular-material-modules/material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { SidenavService } from './services/sidenav.service'


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    BrowserAnimationsModule,
    MaterialModule
  ],
  declarations: [ 
    AppComponent, 
    HeaderComponent,
    LeftMenuComponent
  ],
  providers: [ SidenavService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
