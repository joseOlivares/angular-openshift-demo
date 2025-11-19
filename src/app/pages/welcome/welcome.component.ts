import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../../shared/components/modal/modal.component';
import { UserService } from '../../core/services/user.service';

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

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.username = this.userService.getUsername();
  }

  openDashboard() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
