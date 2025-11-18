import { Component, inject} from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  router=inject(Router);
  loginForm=this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],

  });



  login(){
    if(this.loginForm.valid) {
      const username = this.loginForm.get('username')?.value;
      this.router.navigate(['/welcome'], { queryParams: { username } });
    }
  }

}
