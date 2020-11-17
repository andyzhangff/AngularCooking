import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginService } from '../login/login.service';
import{RegisterService} from '../register/register.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import{Register} from './register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[LoginService,RegisterService]
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup
  registerinfo= new Register('default','default','default')

  constructor(private _fb: FormBuilder,
    private _loginService: LoginService,
    private _registerService: RegisterService,
    ) { }

  ngOnInit(): void {
    this.initForm();

  }

  initForm(): void {
    this.registerForm = this._fb.group({
      username: [null,Validators.required],
      email: [null,Validators.required],
      password: [null,Validators.required],
      // verification: [null,Validators.required],
    });
  }

  get username() { return this.registerForm.get('username'); }

  get password() { return this.registerForm.get('password'); }

  get email() { return this.registerForm.get('email'); }

  onSubmit(): void{

    this.registerinfo.username =  this.username.value
    this.registerinfo.password =  this.password.value
    this.registerinfo.email =  this.email.value

    // const userinfo=JSON.stringify(this.registerinfo);

      this._registerService.register(this.registerinfo).subscribe(
        data=>console.log('post is success',data),
        error=>console.log('post is fail',error)
      );
 }

}
