import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  usernameNotExist=false;
  passwordWrong=false;

  constructor(private _fb: FormBuilder,
    private _loginService: LoginService,
    private _router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this._fb.group({
      username: [null,Validators.required],
      password: [null,Validators.required],
    });
  }

  get username() { return this.loginForm.get('username'); }
  get password() { return this.loginForm.get('password'); }

  onSubmit(): void{
      this._loginService.login({
        "username": this.username.value,
        "password":this.password.value
      }).subscribe(
        data=>{
          if (data['loginResult'] == 'login success')  {
            localStorage.setItem('Authorization', data['token']);
            this._router.navigate(['/route-hall']);
          }
          if (data['loginResult'] == 'password wrong') this.passwordWrong=true;
          if (data['loginResult'] == 'username not exist') this.usernameNotExist=true;
        },
        error=>console.log('post is fail',error)
      );
 }


}
