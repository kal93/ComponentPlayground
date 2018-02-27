import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { MatButtonModule, MatCheckboxModule, MatToolbarModule, MatCardModule, MatDividerModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CardToolbarComponent } from './card-toolbar/card-toolbar.component';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  // default route
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/'
  },
  {
    path: 'dummy',
    component: DummyComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CardToolbarComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
