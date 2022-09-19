import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { SnackBarComponent } from "../shared/snack-bar/snack-bar.component";

@Injectable({
    providedIn: 'root'
  })
  export class SnackBarService {
  
    constructor(private snackBar: MatSnackBar) { }
    public openWarning(messages: string[]) {
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 5 * 1000,
        data: {
          errors: messages
        },
        verticalPosition: "top",
        horizontalPosition: "center",
        panelClass: 'snackbar-warning'
      });
    }
    public openSuccess(messages: string[]) {
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 5 * 1000,
        data: {
          errors: messages
        },
        verticalPosition: "top",
        horizontalPosition: "center",
        panelClass: 'snackbar-success' 
      });
    }
    public openInfo(message: string[]) {
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 5 * 1000,
        data: {
          errors: message
        },
        verticalPosition: "top",
        horizontalPosition: "center",
        panelClass: 'snackbar-info'
      });
    }
    public openError(message: string[]) {
      this.snackBar.openFromComponent(SnackBarComponent, {
        duration: 5 * 1000,
        data: {
          errors: message
        },
        verticalPosition: "top",
        horizontalPosition: "center",
        panelClass: 'snackbar-error'
      });
    }
  }
  