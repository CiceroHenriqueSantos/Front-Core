import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class LoadingService {
    private loads: any[] = [];
  
    // constructor(private ngxService: NgxSpinnerService) {
    // }
  
    remove(): void {
      // this.loads.splice(0, 1);
      // if (this.loads?.length == 0)
      //   this.ngxService.hide();
    }
  
    show(): void {
      // this.loads.push(1);
      // this.ngxService.show();
    }
  
    hide(): void {
      if (this.loads?.length > 0) {
        this.remove();
        return;
      }
  
      // this.ngxService.hide();
    }
  
    hideAll(): void {
      this.loads.forEach(() => this.remove());
    }
  }
  