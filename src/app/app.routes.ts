import { Routes } from '@angular/router';
// client
import { BookDashboardComponent } from './Client/book-dashboard/book-dashboard.component';
import { BookInfoComponent } from './Client/book-info/book-info.component';
import { BasketComponent } from './Client/basket/basket.component';
// layout controller
import { LayoutComponent } from './layout/layout/layout.component';
// admin
import { AnalyticsComponent } from './admin/analytics/analytics.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { CategoryComponent } from './admin/category/category.component';
import { AuthorComponent } from './admin/author/author.component';
import { PublisherComponent } from './admin/publisher/publisher.component';
import { BookComponent } from './admin/book/book.component';
import { SellerCategoryComponent } from './Seller/category/category.component';
import { SellerAuthorComponent } from './Seller/author/author.component';
import { SellerPublisherComponent } from './Seller/publisher/publisher.component';
import { SellerBookComponent } from './Seller/book/book.component';

export const routes: Routes = [
  // client
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: BookDashboardComponent },
      { path: 'book-info/:id', component: BookInfoComponent },
      { path: 'basket', component: BasketComponent },
    ],
  },

  // admin
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'category', component: CategoryComponent },
      { path: 'author', component: AuthorComponent },
      { path: 'publisher', component: PublisherComponent },
      { path: 'book', component: BookComponent },
    ],
  },

  {
    path:'seller',
    component: LayoutComponent,
    children: [
      { path: 'analytics', component: AnalyticsComponent },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'category', component: SellerCategoryComponent },
      { path: 'author', component: SellerAuthorComponent },
      { path: 'publisher', component: SellerPublisherComponent },
      { path: 'book', component: SellerBookComponent },

    ]
  }
];
