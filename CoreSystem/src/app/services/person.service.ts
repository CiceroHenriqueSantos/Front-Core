import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { LoadingService } from "../shared/loading/loading.service";
import { BaseService } from "./base.service";
import { SnackBarService } from "./snack-bar.service";

@Injectable({
    providedIn: 'root'
})

export class PersonService extends BaseService { 
    constructor(http: HttpClient, snackBarService: SnackBarService, loadingService: LoadingService) {
        super(http, snackBarService, loadingService);
    }

    getAll() {
        return this._get<any>(`${environment.managerUrl}/api/v${environment.version}/Person`);
    }
}