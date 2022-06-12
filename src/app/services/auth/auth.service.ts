import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/compat/auth' 
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isLogged = new BehaviorSubject<boolean>(false);

  constructor(private fireauth : AngularFireAuth, private router : Router) { }

  get isLoggedIn(): any {
    return this.isLogged.asObservable()
  }

  // login method
  login(email : string, password : string) {
    this.fireauth.signInWithEmailAndPassword(email,password).then(res => {

      this.isLogged.next(true)

        localStorage.setItem('token','true');

        localStorage.setItem('user', JSON.stringify(new User(email)))

        this.router.navigate(['/restaurants'])
    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })
  }

  // register method
  register(email : string, password : string) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( res => {
      alert('Registration Successful');
      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
      this.router.navigate(['/register']);
    })
  }

  // sign out
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.isLogged.next(false)

      this.router.navigate(['/login']);
    }, err => {
      alert(err.message);
    })
  }

}
