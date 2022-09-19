import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { PersonRequest } from "../models/person-request.model";
import { PersonPaged } from "../models/person.model";
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

    getAll(filters: any) {
        let params = new HttpParams();

        if (filters) {
            Object.keys(filters).forEach((key) => {
                if (filters[key] && filters[key]?.length != 0)
                    params = params.append(key, filters[key]);
            });
        }
        return this._get<PersonPaged>(`${environment.managerUrl}/api/v${environment.version}/Person`, { params: params });
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