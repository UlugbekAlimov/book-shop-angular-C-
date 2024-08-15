import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from '../../admin/admin-interface/author.interface';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';

@Component({
  selector: 'app-authoe',
  standalone: true,
  imports: [CommonModule , CustomModalComponent],
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class SellerAuthorComponent {
  showModal: boolean = false;
  isEditMode: boolean = false;
  currentAuthor: Author = {
    id: '',
    name: '',
    description: '',
  };

  authors: Author[] = [
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

  openModal( mode: 'create' | 'edit' , author?: Author ):void {
    this.isEditMode = mode === 'edit'
    this.showModal = true;

    if ( this.isEditMode && author ){
      this.currentAuthor = { ...author };
    } else {
      this.currentAuthor = {
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
