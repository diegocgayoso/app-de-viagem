import { Routes } from '@angular/router';
import { DatesComponent } from './features/dates/dates.component';
import { HomeComponent } from './features/home/home.component';
import { TicketsComponent } from './features/tickets/tickets.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'tickets', component: TicketsComponent },
  { path: 'dates', component: DatesComponent },
  { path: 'user', component: UserComponent },
];
