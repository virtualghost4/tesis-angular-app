import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(authService: AuthService) { }

  ngOnInit() {
  }

  login(email: string, password: string): void {
    this.authService.login(email, password).subscribe();
  }
}