import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  greetMsg :string = 'Hello from CompanyService!';

  sayHello() : string{
    return this.greetMsg;
  }

}
