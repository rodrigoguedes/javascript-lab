import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabuadaComponent } from './tabuada.component';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, TabuadaComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
