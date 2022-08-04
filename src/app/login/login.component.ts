import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  acno = '';
  pass = '';
  regacno = '';
  reguname = '';
  regpass = '';

  constructor(
    private router: Router,
    private db: DataService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {}

  login() {
    const acno = this.acno;
    const pass = this.pass;
    const database = this.db.database;
    if (acno in database) {
      if (pass == database[acno].pswd) {
        alert('Login success.');
        this.router.navigateByUrl('dashboard');
      } else {
        alert('Wrong password');
      }
    } else {
      alert('User not found, please register.');
    }
  }
  register() {
    const acno = this.regacno;
    const uname = this.reguname;
    const pass = this.regpass;
    const result = this.db.register(acno, uname, pass);
    if (result) {
      console.log(this.db);
      alert('Register successfull');
    } else alert('Account exist, please login');
  }

  openModal() {
    let modal = this.el.nativeElement.querySelector('.modal1');
    modal.classList.remove('hidden');
    let overlay = this.el.nativeElement.querySelector('.overlay');
    overlay.classList.remove('hidden');
  }

  closeModal() {
    let modal = this.el.nativeElement.querySelector('.modal1');
    modal.classList.add('hidden');
    let overlay = this.el.nativeElement.querySelector('.overlay');
    overlay.classList.add('hidden');
  }
}
