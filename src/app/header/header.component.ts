import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
 isTrue:any =false;
  
  constructor() { }

  ngOnInit(): void {
    const body=document.getElementsByTagName('body')[0];
    body.classList.add('login_body');
  }
  firstTheme(){
    this.isTrue=!this.isTrue;
    localStorage.setItem('name',this.isTrue)
  }
  secondTheme(){
    this.isTrue=!this.isTrue;
    localStorage.setItem('name',this.isTrue);
  }
}
