import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  name:string = ''
  mailId:string = ''
  loggin(){
    if(this.name == '' && this.mailId == ''){
      window.alert("Enter values for both fields")
    }else if (this.name == '' || this.mailId == ''){
      let value = this.name ? "MailId" : "Name"
      window.alert(`Enter value for ${value}`)
    }else{
      this.router.navigate(['home'],{queryParams:{name: this.name}})
    }
  }
}
