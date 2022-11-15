import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-signin-view',
	templateUrl: './signin-view.component.html',
	styleUrls: ['./signin-view.component.scss']
})
export class SigninViewComponent implements OnInit{
	formLogin: FormGroup;
  constructor(
    private userService: UserService,
    private router:Router
  ){
    this.formLogin = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }

  ngOnInit(): void {

  }

  onSubmit(){
    this.userService.login(this.formLogin.value)
    .then(response =>{
      console.log(response);
      this.router.navigate(['/home']);
    })
    .catch(error =>console.log(error));

  }


}
