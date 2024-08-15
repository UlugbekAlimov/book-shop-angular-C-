import { Component, OnInit } from '@angular/core';
import { AdminDashboardBook } from '../admin-interface/dashboard.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  books: AdminDashboardBook[] = [
    {
      id: '1',
      image: 'https://via.placeholder.com/150',
      name: 'Book 1',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price: 100,
      count: 1,
      publisher: 'faridun',
      rating: 2.3
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/150',
      name: 'Book 2',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price: 100,
      count: 1,
      publisher: 'faridun',
      rating: 4
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/150',
      name: 'Book 3',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price: 100,
      count: 1,
      publisher: 'faridun',
      rating: 5
    },
    {
      id: '4',
      image: 'https://via.placeholder.com/150',
      name: 'Book 4',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price: 100,
      count: 1,
      publisher: 'faridun',
      rating: 3
    },
    {
      id: '5',
      image: 'https://via.placeholder.com/150',
      name: 'Book 5',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price: 100,
      count: 1,
      publisher: 'faridun',
      rating: 2
    },
    {
      id: '6',
      image: 'https://via.placeholder.com/150',
      name: 'Book 6',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price: 100,
      count: 1,
      publisher: 'faridun',
      rating: 4.3
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
