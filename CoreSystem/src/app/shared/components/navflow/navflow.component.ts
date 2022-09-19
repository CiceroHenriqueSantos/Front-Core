import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NavFlowItens } from './models/navflow-itens';

@Component({
  selector: 'app-navflow',
  templateUrl: './navflow.component.html',
  styleUrls: ['./navflow.component.scss']
})
export class NavflowComponent implements OnInit, OnChanges {

  @Input() items: string = '';
  itemsLst: NavFlowItens[] = [];

  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.itemsLst = JSON.parse(this.items) as NavFlowItens[];
  }

  ngOnInit(): void {

  }

}
