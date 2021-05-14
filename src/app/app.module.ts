import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BodyComponent } from './body/body.component';
import { DisplayComponent } from './display/display.component';
import { ButtonComponent } from './button/button.component';

const componentArr = [
  AppComponent,
  LayoutComponent,
  BodyComponent,
  DisplayComponent,
  ButtonComponent,
];

@NgModule({
  declarations: componentArr,
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
