import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }
loginGoogle(){

    this.authService.loginGoogleUser();
  }
loginFacebook(){
    this.authService.loginFacebookUser();
  }
}
