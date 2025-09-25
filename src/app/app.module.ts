import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineEditingOneComponent } from './pages/inline-editing-one/inline-editing-one.component';
import { InlineEditingtwoComponent } from './pages/inline-editingtwo/inline-editingtwo.component';
import { FormsModule } from '@angular/forms';
import { InlineEditingThreeComponent } from './pages/inline-editing-three/inline-editing-three.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineEditingOneComponent,
    InlineEditingtwoComponent,
    InlineEditingThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
