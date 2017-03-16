import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h5>Passing NgModel to child component</h5>
             <input type="text" [(ngModel)]="personDetails.name" placeholder="Full Name">
             <app-child [(ngModel)]="personDetails.address.city"></app-child>
             <p>{{ personDetails | json }}</p> 
            `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  personDetails = {
    name: "John Doe",
    address: {
      city: "Turku"
    }
  };
  constructor() {}

  ngOnInit() {}
}
