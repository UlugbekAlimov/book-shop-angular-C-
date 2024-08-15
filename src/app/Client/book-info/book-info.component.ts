import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Book } from '../interface/book.interface';
import { CommonModule } from '@angular/common';
import { BasketService } from '../service/basket.serivce';

@Component({
  selector: 'app-book-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.scss'],
})
export class BookInfoComponent implements OnInit {
  book: Book | undefined;
  popularBooks: Book[] = [
    {
      id: '1',
      image: 'https://via.placeholder.com/150',
      name: 'Popular Book 1',
      description: 'Description of Popular Book 1',
      author: 'Author 1',
      category: 'Category 1',
      price: 100,
      count: 1,
      publisher: 'Publisher 1',
      rating: 4.5,
    },
    {
      id: '2',
      image: 'https://via.placeholder.com/150',
      name: 'Popular Book 2',
      description: 'Description of Popular Book 2',
      author: 'Author 2',
      category: 'Category 2',
      price: 100,
      count: 1,
      publisher: 'Publisher 2',
      rating: 3.8,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    if (bookId) {
      this.book = this.getBookById(bookId);
    }
  }

  getBookById(id: string): Book | undefined {
    return {
      id: id,
      image: 'https://via.placeholder.com/150',
      name: 'Book ' + id,
      description: 'Detailed description of Book ' + id,
      author: 'Author ' + id,
      category: 'Category ' + id,
      price: 100,
      count: 1,
      publisher: 'Publisher ' + id,
      rating: 4.2,
    };
  }

  addToBasket(): void {
    if (this.book) {
      this.basketService.addToBasket(this.book);
      this.router.navigate(['/basket']);
    }
  }

  setRating(rating: number): void {
    if (this.book) {
      this.book.rating = rating;
    }
  }

  starsArray(filled: boolean): number[] {
    const totalStars = 5;
    const rating = this.book?.rating || 0;
    const filledStars = Math.floor(rating);
    const halfStar = (rating % 1) >= 0.5;

    if (filled) {
      return Array(filledStars).fill(0).map((_, i) => i + 1);
    } else {
      const total = halfStar ? totalStars - filledStars - 1 : totalStars - filledStars;
      return Array(total).fill(0).map((_, i) => i + 1);
    }
  }
}
