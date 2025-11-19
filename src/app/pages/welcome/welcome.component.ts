import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ModalComponent } from '../../shared/components/modal/modal.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent implements OnInit {
  username: string = '';
  showModal: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    this.username = navigation?.extras?.state?.['username'] || 'Usuario';
  }

  openDashboard() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}