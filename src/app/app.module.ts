import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuteursModule } from './auteurs/auteurs.module';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecialitesModule } from './specialites/specialites.module';
import { EditeursModule } from './editeurs/editeurs.module';
import { LivresModule } from './livres/livres.module';

import { CloudinaryModule } from '@cloudinary/ng';
import { AuthentificationModule } from './authentification/authentification.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuteursModule,
    SpecialitesModule,
    EditeursModule,
    LivresModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CloudinaryModule,
    AuthentificationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
