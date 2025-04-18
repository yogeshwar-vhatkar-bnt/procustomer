import { Component, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.sass']
})
export class ChildComponent {

  @Input() name : string = 'TempName';
  @Input() isUserLoggedIn : boolean = false;

  @Input() iplTeamNameChild : string = 'MI';

  @Output() updateUsernameEvent = new EventEmitter<string>();

  @Output() capitaliseEvent  = new EventEmitter<string>();

  updateUsername() {
    this.updateUsernameEvent.emit("Mr" + this.name);
  }

  capitaliseName() {
    this.capitaliseEvent.emit(this.iplTeamNameChild.toUpperCase());
  }
}
