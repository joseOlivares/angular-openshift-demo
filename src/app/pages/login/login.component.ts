import { Component, inject} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  fb=inject(FormBuilder);
  loginForm=this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],

  });



  login(){
    console.log(this.loginForm.value);
  }

}
