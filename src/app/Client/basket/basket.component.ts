import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketService } from '../service/basket.serivce';
import { BasketItem } from '../service/basket.serivce';
import { RouterModule } from '@angular/router';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CommonModule, RouterModule, CustomModalComponent],
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent {
  basketItems: BasketItem[] = [];
  showModal: boolean = false;

  constructor(private basketService: BasketService) {
    this.basketService.basket$.subscribe((items) => {
      this.basketItems = items;
    });
  }

  increaseQuantity(bookId: string): void {
    const item = this.basketItems.find((item) => item.book.id === bookId);
    if (item) {
      this.basketService.updateQuantity(bookId, item.quantity + 1);
    }
  }

  decreaseQuantity(bookId: string): void {
    const item = this.basketItems.find((item) => item.book.id === bookId);
    if (item) {
      this.basketService.updateQuantity(bookId, item.quantity - 1);
    }
  }

  removeItem(bookId: string): void {
    this.basketService.removeFromBasket(bookId);
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
