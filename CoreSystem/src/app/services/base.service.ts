import { HttpClient, HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { LoadingService } from "../shared/loading/loading.service";
import { SnackBarService } from "./snack-bar.service";

export class BaseService {
    constructor(protected http: HttpClient,
        private snackBarService: SnackBarService,
        private loadingService: LoadingService) { }
    protected _get<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.get<T>(url, options).pipe(catchError(err => {
            return this.handleError(err);
        }));
    }
    protected _post<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.post<T>(url, body, options).pipe(catchError(err => {
            return this.handleError(err);
        }));
    }
    protected _put<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.put<T>(url, body, options).pipe(catchError(err => {
            return this.handleError(err);
        }));
    }
    protected _patch<T>(url: string, body: any | null, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.patch<T>(url, body, options).pipe(catchError(err => {
            return this.handleError(err);
        }));
    }
    protected _delete<T>(url: string, options?: {
        headers?: HttpHeaders | {
            [header: string]: string | string[];
        };
        context?: HttpContext;
        observe?: 'body';
        params?: HttpParams | {
            [param: string]: string | number | boolean | ReadonlyArray<string | number | boolean>;
        };
        reportProgress?: boolean;
        responseType?: 'json';
        withCredentials?: boolean;
    }): Observable<T> {
        return this.http.delete<T>(url, options).pipe(catchError(err => {
            return this.handleError(err);
        }));
    }
    private handleError(err: any): Observable<any> {
        if (err.status == 404) {
            this.snackBarService.openWarning(err.error);
            return of(null);
        }
        if (err.status == 400 && Array.isArray(err.error)) {
            this.loadingService.hideAll();
            this.snackBarService.openWarning(err.error);
        }
        else {
            this.loadingService.hideAll();
            this.snackBarService.openError(['ocorreu um erro inesperado']);
        }
        throw new Error(err.error);
    }
}