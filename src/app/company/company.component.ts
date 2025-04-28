import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from '../second/second.component';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company',
  standalone: true,
  imports: [CommonModule, SecondComponent],
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.sass']
})
export class CompanyComponent {
 
  constructor(private readonly company: CompanyService) { 
  }

  msg : string = '';

  getGreeting() {
    this.msg = this.company.sayHello();
  }

}
