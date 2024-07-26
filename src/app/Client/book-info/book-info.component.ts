import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Book } from '../../interface/book.interface';
import { CommonModule } from '@angular/common';
import { BasketService } from '../../service/basket.serivce';

@Component({
  selector: 'app-book-info',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-info.component.html',
  styleUrl: './book-info.component.scss',
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
      price : 100 ,
      count : 1,
      publisher : 'faridun'
    },
    {
      id: '1',
      image: 'https://via.placeholder.com/150',
      name: 'Popular Book 2',
      description: 'Description of Popular Book 2',
      author: 'Author 2',
      category: 'Category 2',
      price : 100 ,
      count : 1,
      publisher : 'faridun'
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private basketService: BasketService
  ) {}

  ngOnInit(): void {
    const bookId = this.route.snapshot.paramMap.get('id');
    console.log('Book ID:', bookId);
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
      price : 1 ,
      count : 1,
      publisher : 'faridun'
    };
  }

  addToBasket(): void {
    if (this.book) {
      this.basketService.addToBasket(this.book);
      this.router.navigate(['/basket']);
    }
  }
}
