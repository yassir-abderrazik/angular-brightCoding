import { FormGroup, NgForm, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UsernameValidator } from './username.validator';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  form = new FormGroup({
    name: new FormControl('',[ 
      Validators.required,
      UsernameValidator.cannotContainSpace
    ]),
    password: new FormControl('', Validators.required),
  });

}
