import { Router, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule , CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  baseRoute: string = '/admin';
  searchQuery: string = '';
  links: { name: string, route: string }[] = [];
  filteredLinks: { name: string, route: string }[] = [];

  constructor(private router: Router) {
    if (this.router.url.startsWith('/seller')) {
      this.baseRoute = '/seller';
    }

    this.links = [
      { name: 'Dashboard', route: `${this.baseRoute}/dashboard` },
      { name: 'Analytics', route: `${this.baseRoute}/analytics` },
      { name: 'Category', route: `${this.baseRoute}/category` },
      { name: 'Author', route: `${this.baseRoute}/author` },
      { name: 'Publisher', route: `${this.baseRoute}/publisher` },
      { name: 'Create book', route: `${this.baseRoute}/book` },
    ];

    this.filteredLinks = this.links;
  }

  onSearchChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.searchQuery = inputElement.value.toLowerCase();
    this.filteredLinks = this.links.filter(link =>
      link.name.toLowerCase().includes(this.searchQuery)
    );
  }
}