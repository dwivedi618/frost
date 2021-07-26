import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

/**
 * This service class will provide access to
 * services of REST Apis using http methods
 */
export class RestService {

    constructor(
        private http: HttpClient,
    ) {}

    get(path: string, params?: HttpParams) {
        const url: string = environment.apiUrl + path;
        console.log('this is url', url)
        return this.http.get<any>(url, { params: params });
    }

    post(path: string, body: object) {
        const url: string = environment.apiUrl + path;
        return this.http.post(url, body);
    }

    put(path: string, body: object) {
        const url: string = environment.apiUrl + path;
        return this.http.put(url, body);
    }

    delete(path: string, body: object) {
        const url: string = environment.apiUrl + path;
        return this.http.put(url, body);
    }

}