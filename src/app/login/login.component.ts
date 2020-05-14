import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../toast/toast.service';
import { Subject } from 'rxjs';

export interface IUser {
  id?: number
  username: string;
  password: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: IUser = {
    username: null,
    password: null,
  };

  constructor(private router: Router, private toastService: ToastService) {
  }

  ngOnInit() {


  }


  login(user: IUser) {

    const presetUser = { username: 'ben', password: 'ben123' };

    if (user.username != null && user.password != null && user.username != '' && user.password != '') {

      
        this.router.navigate(['cart', user]);
      localStorage.setItem('user', JSON.stringify(user));


    } else {
      this.toastService.showToast('danger', 2000, 'invalid credentials');
    }
  }
}
