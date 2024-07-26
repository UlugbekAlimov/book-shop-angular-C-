import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../interface/book.interface';

export interface BasketItem {
  book: Book;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  private basket: BasketItem[] = [];
  private basketSubject = new BehaviorSubject<BasketItem[]>([]);
  basket$ = this.basketSubject.asObservable();

  addToBasket(book: Book): void {
    const existingItem = this.basket.find((item) => item.book.id === book.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      this.basket.push({ book, quantity: 1 });
    }
    this.basketSubject.next(this.basket);
  }

  removeFromBasket(bookId: string): void {
    this.basket = this.basket.filter((item) => item.book.id !== bookId);
    this.basketSubject.next(this.basket);
  }

  updateQuantity(bookId: string, quantity: number): void {
    const item = this.basket.find((item) => item.book.id === bookId);
    if (item) {
      item.quantity = quantity;
      if (item.quantity <= 0) {
        this.removeFromBasket(bookId);
      } else {
        this.basketSubject.next(this.basket);
      }
    }
  }

  getBasketItems(): BasketItem[] {
    return this.basket;
  }
}
