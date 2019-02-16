import { Injectable } from '@angular/core';
import { Router } from  "@angular/router";
import { auth } from  'firebase/app';
import { AngularFireAuth } from  "@angular/fire/auth";
import { User } from  'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	user:User;
  constructor(public router: Router, public afAuth:AngularFireAuth ) {
  	// Nos suscribimos al estado de la Autenticacion
  	this.afAuth.authState.subscribe(user => {
  		//Si el usuario es Logueado se almacena en el LocalStorage del explorador
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
      	// si no es logueado se almacena null
        localStorage.setItem('user', null);
      }
    })

   }
}


