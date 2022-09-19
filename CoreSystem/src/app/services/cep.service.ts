import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Cep } from "../models/cep.model";
import { LoadingService } from "../shared/loading/loading.service";
import { BaseService } from "./base.service";
import { SnackBarService } from "./snack-bar.service";

@Injectable({
    providedIn: 'root'
})
export class CepService extends BaseService {
    constructor(http: HttpClient, snackBarService: SnackBarService, loadingService: LoadingService) {
        super(http, snackBarService, loadingService);
    }

    searchCep(cep: string): Observable<Cep> {
        return this._get<Cep>(`https://viacep.com.br/ws/${cep}/json/`);
    }
}






