import { Component, EventEmitter, Input, Output , HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-modal',
  standalone : true,
  imports: [CommonModule],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss',
})
export class CustomModalComponent {
  @Input() title: string = '';
  @Input() showModal: boolean = false;
  @Input() size: 'xl' | '2xl' | '3xl' | '4xl' = 'xl';
  @Output() close = new EventEmitter<void>();

  @HostBinding('class.fade-out') fadeOut = false;

  onClose() {
    this.fadeOut = true;
    setTimeout(() => {
      this.showModal = false;
      this.fadeOut = false;
      this.close.emit();
    }, 300);
  }
}