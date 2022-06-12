import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  isLogged: Observable<boolean>;  


  constructor(private service: AuthService) { 
    this.isLogged = service.isLoggedIn
  }

  ngOnInit(): void {

    }

  logout() {
    this.service.logout()
  }

}
