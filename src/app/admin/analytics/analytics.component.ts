import { Component } from '@angular/core';
import { Book } from '../../Client/interface/book.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {
  totalBooks: number = 120;
  soldBooks: number = 75; 
  popularBooks: Book [] = [
    {
      id: '1',
      image: 'https://via.placeholder.com/150',
      name: 'Popular Book 1',
      description: 'Description of Popular Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price: 100,
      count: 1,
      publisher: 'faridun',
    },
    {
      id: '1',
      image: 'https://via.placeholder.com/150',
      name: 'Popular Book 2',
      description: 'Description of Popular Book 2',
      author: 'Author 2',
      category: 'Category 2',
      price: 100,
      count: 1,
      publisher: 'faridun',
    },
  ];
}
