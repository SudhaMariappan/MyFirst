import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginDetails!:FormGroup;
  isTrue:any=localStorage.getItem('name');
 
  
  
  
  
  
  constructor(private router:Router,private fb:FormBuilder) { }
  ngOnInit(): void {
    this.loginDetails=this.fb.group({
        username:[''],
        password:[''],
        
    })
    const body=document.getElementsByTagName('body')[0];
    body.classList.add('login_body');
  }
  registerPage(){
    this.router.navigate(['/register']);
  }
  checkLogin(){
    if(localStorage.getItem('name')===this.loginDetails.controls.username.value && localStorage.getItem('password') === this.loginDetails.controls.password.value) {
      console.log("success")
      this.router.navigate(['/dashboard']);
    }else{
      console.log("failed")
    }
  }
  

}
