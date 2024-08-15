import { Component, OnInit } from '@angular/core';
import { AdminBook } from '../../admin/admin-interface/admin-book.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CustomModalComponent , CommonModule],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class SellerBookComponent {
  showModal: boolean = false;
  isEditMode: boolean = false;
  currentAdminBook: AdminBook = {
    id: '',
    name: '',
    ISBN: '',
    image: '',
    publisher_id: '',
  };

  books: AdminBook[] = [
    {
      id: '1',
      name: 'Book 1',
      ISBN: '92834892374982',
      image: 'https://via.placeholder.com/150',
      publisher_id: '1',
    },
    // другие книги
  ];
  
  constructor(private router: Router) {}

  ngOnInit(): void {}

  openModal(mode: 'create' | 'edit', book?: AdminBook): void {
    this.isEditMode = mode === 'edit';
    this.showModal = true;

    if (this.isEditMode && book) {
      this.currentAdminBook = { ...book };
    } else {
      this.currentAdminBook = {
        id: '',
        name: '',
        ISBN: '',
        image: '',
        publisher_id: '',
      };
    }
  }

  closeModal(): void {
    this.showModal = false;
  }
}
