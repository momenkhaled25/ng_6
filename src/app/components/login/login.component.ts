import { Component } from '@angular/core';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
isUserLogin: Boolean
  constructor(private _authService: UserAuthService) {
    this.isUserLogin = this._authService.getUserLogged();
  }
  
  login() {
    this._authService.login();
    this.isUserLogin = true;
  }

  logout() {
    this._authService.logout();
    this.isUserLogin = false;
  }

}
