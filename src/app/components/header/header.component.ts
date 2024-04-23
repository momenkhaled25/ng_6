import { Component, OnInit } from '@angular/core';
import { StaticProductService } from '../../services/static-product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink , RouterLinkActive , CommonModule],
  //if i want instance is special for header component
  // providers: [StaticProductService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isUserLoggedIn !: Boolean;
  constructor(private _userAuth: UserAuthService) {
    
  }
  ngOnInit(): void {
    // this.isUserLoggedIn = this._userAuth.getUserLogged();
    this._userAuth.getAuthSubject().subscribe({
      next: (status) => {
        this.isUserLoggedIn = status;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  

}
