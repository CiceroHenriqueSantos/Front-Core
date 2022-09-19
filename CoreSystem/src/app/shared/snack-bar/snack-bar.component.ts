import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {

  public errors: [] = [];
  constructor(@Inject(MAT_SNACK_BAR_DATA) private data: any) {
    this.errors = this.data.errors || [];
  }

}
