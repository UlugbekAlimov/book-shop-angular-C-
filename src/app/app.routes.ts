import { Routes } from '@angular/router';
import { BookDashboardComponent } from './components/book-dashboard/book-dashboard.component';
import { BookInfoComponent } from './components/book-info/book-info.component';
import { BasketComponent } from './components/basket/basket.component';

export const routes: Routes = [
  { path: '', component: BookDashboardComponent },
  { path: 'book-info/:id', component: BookInfoComponent },
  { path: 'basket', component: BasketComponent },
];
