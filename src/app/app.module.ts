import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { ApodComponent } from './components/apod/apod.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { LibraryComponent } from './components/library/library.component';
import { FormsModule } from '@angular/forms';
import { ThumbResultComponent } from './components/thumb-result/thumb-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ApodComponent,
    PagenotfoundComponent,
    HomeComponent,
    HeaderComponent,
    LibraryComponent,
    ThumbResultComponent,
  ],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
