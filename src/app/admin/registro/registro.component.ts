import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Router } from  "@angular/router";
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
  }

registroUser(user,password){
  console.log("usuario",user);
  this.authService.registroUser(user,password)
  .then((res)=>{
  this.router.navigate(['admin/list']);
    }).catch(err=> console.log("Error ",err.message));
}

}
