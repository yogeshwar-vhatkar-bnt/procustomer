import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.sass']
})
export class PipesComponent {

  todayDate: Date = new Date();

  amount: number = 1.987654;

  featureName : string = 'Angular Pipes Feature';

  markPercent : number = 98.76;


  person = {
    gender: 'male',
    name: 'John Doe',
    age: 30,
    street: '123 Main St',
    city: 'New York',
    state: 'NY',
    zip: '10001'
  };


  gender: string = 'male';

  salutationMap: { [key: string]: string } = {
    'male' : 'Mr.',
    'fremale' : 'Ms.',
    'other' : 'Mx.'
  };

  num1: number = 11;
  num2: number = 22;
}
