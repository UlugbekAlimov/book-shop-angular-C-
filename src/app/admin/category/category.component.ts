import { Category } from './../admin-interface/category.interface';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule , CustomModalComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  showModal: boolean = false;
  isEditMode: boolean = false;
  currentCategory: Category = {
    id: '',
    name: '',
    description: '',
  };
  

  categories: Category[] = [
    {
      id: '1',
      name: 'Fiction',
      description: 'Explore a wide range of fictional books.',
    },
    {
      id: '2',
      name: 'Non-Fiction',
      description: 'Discover informative and factual books.',
    },
    {
      id: '3',
      name: 'Science Fiction',
      description: 'Dive into the world of science fiction.',
    }
  ];

  openModal( mode: 'create' | 'edit' , category?: Category ):void {
    this.isEditMode = mode === 'edit'
    this.showModal = true;

    if ( this.isEditMode && category ){
      this.currentCategory = { ...category };
    } else {
      this.currentCategory = {
        id: '',
        name: '',
        description: '',
      }
    }
  }

  closeModal() {
    this.showModal = false;
  }
}
