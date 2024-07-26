import { Component, OnInit } from '@angular/core';
import { Book } from '../../interface/book.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-dashboard.component.html',
  styleUrl: './book-dashboard.component.scss',
})
export class BookDashboardComponent implements OnInit {
  books: Book[] = [
    {
      id: '1',
      image: 'https://via.placeholder.com/150',
      name: 'Book 1',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price : 100 ,
      count : 1,
      publisher : 'faridun'
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/150',
      name: 'Book 2',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price : 100 ,
      count : 1,
      publisher : 'faridun'
    },
    {
      id: '3',
      image: 'https://via.placeholder.com/150',
      name: 'Book 3',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price : 100 ,
      count : 1,
      publisher : 'faridun'
    },
    {
      id: '4',
      image: 'https://via.placeholder.com/150',
      name: 'Book 4',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price : 100 ,
      count : 1,
      publisher : 'faridun'
    },
    {
      id: '5',
      image: 'https://via.placeholder.com/150',
      name: 'Book 5',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price : 100 ,
      count : 1,
      publisher : 'faridun'
    },
    {
      id: '6',
      image: 'https://via.placeholder.com/150',
      name: 'Book 6',
      description: 'Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price : 100 ,
      count : 1,
      publisher : 'faridun'
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewBookInfo(bookId: string): void {
    this.router.navigate(['/book-info', bookId]);
  }
}
