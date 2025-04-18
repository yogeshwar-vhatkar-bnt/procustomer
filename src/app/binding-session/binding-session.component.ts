import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-session',
  templateUrl: './binding-session.component.html',
  styleUrls: ['./binding-session.component.sass']
})
export class BindingSessionComponent {


  msg = "Click to increase Count"

  isDisabled = false;

  count = 0;

  empName:string = "Yogesh"

  incrementCount() {
    this.count++;
  }
}
