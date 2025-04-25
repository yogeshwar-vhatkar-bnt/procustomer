import { Component } from '@angular/core';
import { CompanyComponent } from "../company/company.component";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.sass','../first/first.component.sass'],
  standalone:true,
  imports: [CompanyComponent]
})
export class SecondComponent {

  isActiveStatus= true
  isDisabledStatus = true
}
