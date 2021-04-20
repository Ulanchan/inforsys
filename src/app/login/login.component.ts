import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = "";
  password = "";
  errorMessage = '';
  error: { name: string, message: string } = { name: '', message: '' };

  constructor(private authserv: CrudService, private router: Router) { }

  ngOnInit(): void {
  }
  clearErrorMessage() {
    this.errorMessage = '';
    this.error = { name: '', message: '' };
  }
  login() {
    this.clearErrorMessage();
    if (this.validateForm(this.email, this.password)) {
      this.authserv.loginWithEmail(this.email, this.password)
        .then(() => {
          this.router.navigate(['/admin/artikel'])
        }).catch(_error => {
          this.error = _error
          this.router.navigate(['/login'])
        })
    }
  }

  validateForm(email, password) {
    if (email.lenght === 0) {
      this.errorMessage = "Mohon masukkan email"
      return false;
    }
    if (password.lenght === 0) {
      this.errorMessage = " Mohon masukkan password"
      return false;
    }
    if (password.lenght < 6) {
      this.errorMessage = " password minimal 6 karakter"
      return false;
    }
    this.errorMessage = ''
    return true;
  }
}
