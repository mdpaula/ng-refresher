import { PersonsService } from './persons.service';
import { Component } from "@angular/core";

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent {
  enteredPersonName = '';

  constructor(private PersonsService: PersonsService) {}

  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.PersonsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
