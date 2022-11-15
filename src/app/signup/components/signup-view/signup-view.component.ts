import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
	selector: 'app-signup-view',
	templateUrl: './signup-view.component.html',
	styleUrls: ['./signup-view.component.scss']
})
export class SignupViewComponent implements OnInit{
  formReg: FormGroup;

  constructor(
    private userService: UserService,
    private router:Router
  ){
    this.formReg = new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    })
  }
  ngOnInit(): void {
  }

  onSubmit(){
    this.userService.register(this.formReg.value)
      .then(response =>{
        console.log(response);
        this.router.navigate(['/signin']);
      })
      .catch(error => console.log(error));
  }

}

