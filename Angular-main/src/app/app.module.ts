import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContacComponent } from './contac/contac.component';
import { TodolistComponent } from './todolist/todolist.component';

const routes: Routes = [{ path: 'HomePage', component: HomeComponent }];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContacComponent,
    TodolistComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule],
})
export class AppModule {}
