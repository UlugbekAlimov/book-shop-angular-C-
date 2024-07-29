import { Routes } from '@angular/router';
// client
import { BookDashboardComponent } from './Client/book-dashboard/book-dashboard.component';
import { BookInfoComponent } from './Client/book-info/book-info.component';
import { BasketComponent } from './Client/basket/basket.component';
// layout controller 
import { LayoutComponent } from './layout/layout/layout.component';
// admin
import { AnalyticsComponent } from './admin/analytics/analytics.component';

export const routes: Routes = [
  // client
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: BookDashboardComponent },
      { path: 'book-info/:id', component: BookInfoComponent },
      { path: 'basket', component: BasketComponent },
    ]
  },

  // admin
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'analytics', component: AnalyticsComponent },
    ]
  },
];
