import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.page.html',
  styleUrls: ['./loginpage.page.scss'],
})
export class LoginpagePage implements OnInit {
  credentials = this.fb.nonNullable.group({
    email:['ayush@delhi.com', Validators.required],
    password:['123456',Validators.required]
  });
  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private router: Router
  ) {}

  get email(){
    return this.credentials.controls.email;
  }
  get password(){
    return this.credentials.controls.password;
  }

  ngOnInit() {}
  
  async login() {}
}
