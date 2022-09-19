import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PersonRequest } from "../models/person-request.model";
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

    addPerson(person: PersonRequest) {
        return this._post<any>(`${environment.managerUrl}/api/v${environment.version}/Person`, person);
    }

    updatePerson(person: PersonRequest) {
        return this._put<any>(`${environment.managerUrl}/api/v${environment.version}/Person`, person);
    }

    delete(id: number) {
        return this._delete(`${environment.managerUrl}/api/v${environment.version}/Person/${id}`);
      }
}