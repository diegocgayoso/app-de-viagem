import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterLink,
    RouterOutlet,
    MenuComponent,
    HeaderComponent
  ],
})
export class AppComponent {
  title = 'digo-turismo';
}
