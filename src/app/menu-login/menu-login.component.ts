import { Component } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-menu-login',
  standalone: true,
  imports: [RegisterComponent, LoginComponent],
  templateUrl: './menu-login.component.html',
  styleUrl: './menu-login.component.scss',
})
export class MenuLoginComponent {}
