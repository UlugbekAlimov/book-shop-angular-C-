import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CustomModalComponent } from '../../shared/custom-modal/custom-modal.component';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule , CommonModule , CustomModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  isShowModal : boolean = false

  constructor(public router: Router) {}

  openModal():void{
    this.isShowModal = true
  }

  closeModal():void{
    this.isShowModal = false
  }
}
