import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  angForm: FormGroup;
  constructor(private fb: FormBuilder,private dataService: ApiService,private router:Router) {
  this.angForm = this.fb.group({
  email: ['', [Validators.required,Validators.minLength(1), Validators.email]],
  password: ['', Validators.required],
  name: ['', Validators.required],
  mobile: ['', Validators.required]
  });
  }
  
  ngOnInit() {
  }
  postdata(angForm1)
  {
  this.dataService.userregistration(angForm1.value.name,angForm1.value.email,angForm1.value.password)
  .pipe(first())
  .subscribe(
  data => {
  this.router.navigate(['taliah-sign-in']);
  },
  
  error => {
  });
  }
  
  get email() { return this.angForm.get('email'); }
  get password() { return this.angForm.get('password'); }
  get name() { return this.angForm.get('name'); }
  }