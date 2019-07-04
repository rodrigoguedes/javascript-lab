import { RouterModule } from '@angular/router';
import { LoggedInGuard } from './login/logged-in.guard';
import { LoginFormComponent } from './login/login-form.component';
import { PrincipalComponent } from './principal/principal.component';

export const routing = RouterModule.forRoot([
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'principal',
    component: PrincipalComponent
  },
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: 'full'
  }
]);
