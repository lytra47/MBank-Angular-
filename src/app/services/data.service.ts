import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  database: any = {
    1211: {
      acno: 1211,
      name: 'lytra',
      pswd: 1234,
      balance: 2000,
    },
  };

  constructor() {}

  register(acno: any, name: any, pswd: any) {
    const database = this.database;
    if (acno in database) {
      return false;
    } else {
      database[acno] = {
        acno,
        name,
        pswd,
        balance: 790,
      };
      return true;
    }
  }
}
