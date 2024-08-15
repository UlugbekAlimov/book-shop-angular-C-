import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Publisher } from '../admin-interface/publisher.interface';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';

@Component({
  selector: 'app-publisher',
  standalone: true,
  imports: [CommonModule, CustomModalComponent],
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent {
  showModal: boolean = false;
  isEditMode: boolean = false;
  currentPublisher: Publisher = {
    id: '',
    name: '',
    logo: '',
    email: '',
    address: ''
  };

  publishers: Publisher[] = [
    {
      id: '1',
      name: 'Publisher One',
      logo: 'https://via.placeholder.com/100',
      email: 'contact@publisherone.com',
      address: '1234 Elm Street, Springfield, IL'
    },
    {
      id: '2',
      name: 'Publisher Two',
      logo: 'https://via.placeholder.com/100',
      email: 'contact@publishertwo.com',
      address: '5678 Oak Avenue, Shelbyville, IL'
    },
    {
      id: '3',
      name: 'Publisher Three',
      logo: 'https://via.placeholder.com/100',
      email: 'contact@publisherthree.com',
      address: '9101 Pine Road, Capital City, IL'
    }
  ];

  openModal(mode: 'create' | 'edit', publisher?: Publisher): void {
    this.isEditMode = mode === 'edit';
    this.showModal = true;

    if (this.isEditMode && publisher) {
      this.currentPublisher = { ...publisher };
    } else {
      this.currentPublisher = {
        id: '',
        name: '',
        logo: '',
        email: '',
        address: ''
      };
    }
  }

  closeModal(): void {
    this.showModal = false;
  }
}
