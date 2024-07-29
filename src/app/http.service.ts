import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './menu/menu.component.d';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	private URL: string = "http://localhost:8080/get/";

	constructor (private http: HttpClient) { }

	getPhotos(date: string): Observable<Photo[]> {
		console.log(date);
		return this.http.get<Photo[]>(this.URL.concat(date));
	}
}
