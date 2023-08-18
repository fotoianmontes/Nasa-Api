import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ApodComponent } from './components/apod/apod.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { LibraryComponent } from './components/library/library.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'apod', component: ApodComponent },
  { path: 'library', component: LibraryComponent },
  { path: 'library/:search', component: LibraryComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);
