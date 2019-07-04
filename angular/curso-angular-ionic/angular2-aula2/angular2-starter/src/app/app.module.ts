import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { HttpModule, JsonpModule } from '@angular/http';
import { LoginService } from './login/login.service';
import { LoggedInGuard } from './login/logged-in.guard';
import { LoginFormComponent } from './login/login-form.component';
import { AppComponent } from './app.component';
import { PrincipalService } from './principal/principal.service';
import { PrincipalComponent } from './principal/principal.component';
import { ListaComponent } from './listaemails/lista.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing,HttpModule,JsonpModule],
  declarations: [
    AppComponent,
    LoginFormComponent,
    PrincipalComponent,
    ListaComponent,
    FormularioComponent
  ],
  providers: [
    PrincipalService,
    LoginService,
    LoggedInGuard
    

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
