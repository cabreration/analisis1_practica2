import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = '';
  password = '';
  user_admin='ADMIN';
  password_admin='123';
  
  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  guardar()
  {
    let loginRequest = {
      user: this.user,
      password: this.password
    };

    if(loginRequest.user === this.user_admin && loginRequest.password === this.password_admin)
    {
      sessionStorage.setItem('usuario', JSON.stringify(loginRequest));
      this.router.navigate(['admin']);
    }
    else
    {
      alert('Credenciales Inválidas');      
    }
  }

}
