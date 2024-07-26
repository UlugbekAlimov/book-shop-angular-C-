import { Routes } from '@angular/router';
import { BookDashboardComponent } from './Client/book-dashboard/book-dashboard.component';
import { BookInfoComponent } from './Client/book-info/book-info.component';
import { BasketComponent } from './Client/basket/basket.component';

export const routes: Routes = [
  { path: '', component: BookDashboardComponent },
  { path: 'book-info/:id', component: BookInfoComponent },
  { path: 'basket', component: BasketComponent },
];
