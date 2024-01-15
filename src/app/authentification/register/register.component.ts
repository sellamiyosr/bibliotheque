import { Component } from '@angular/core';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authserv:AuthService,private router:Router){}
user:User=new User()
Ajoutuser=()=>{  
  console.log(this.user);
  
this.authserv.signUp(this.user).subscribe((data=>{
console.log("111111");

this.router.navigate(['login']);
console.log("222222");

}))}
}
