import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.username = params['username'] || 'Usuario';
    });
  }

  openDashboard() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}