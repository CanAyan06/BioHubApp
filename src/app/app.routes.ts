import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { WorkLifeComponent } from './work-life/work-life.component';
import { HomeComponent } from './home/home.component';
import { PlacesComponent } from './places/places.component';
import { SchoolComponent } from './school/school.component';
import { LowerComponent } from './lower/lower.component';
import { DocumentComponent } from './document/document.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'work', component: WorkLifeComponent },
  { path: 'place', component: PlacesComponent },
  { path: 'okul', component: SchoolComponent },
  {path:'hams',component:LowerComponent},
  {path:'doc',component:DocumentComponent}
];
