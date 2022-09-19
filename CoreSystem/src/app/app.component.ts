import { Component, OnInit } from '@angular/core';
import { PersonService } from './services/person.service';
import { BaseComponent } from './shared/base.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {

  title = 'CoreSystem';
  
  constructor(private PersonService: PersonService) {
    super();
  }

  ngOnInit(): void {
    this.PersonService.getAll().subscribe(x => {
      console.log(x);
    });
  }
}
