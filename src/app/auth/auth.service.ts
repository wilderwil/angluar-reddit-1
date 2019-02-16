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
//metodo que hace el login del usuario 
public async  login(email:  string, password:  string) {

try {
    await  this.afAuth.auth.signInWithEmailAndPassword(email, password)
    this.router.navigate(['admin/list']);
} catch (e) {
    alert("Error!"  +  e.message);
}
}

//metodo que hace el logout del usuario 
async salir(){
    try {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  } catch (e) {
    alert("Error!"  +  e.message);
}    
}
// Metodo que cheque si el usuario esta logueado 
get isLoggedIn(): boolean {
    const  user  =  JSON.parse(localStorage.getItem('user'));
    return  user  !==  null;
}
}


