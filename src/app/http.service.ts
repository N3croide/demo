import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Photo } from './menu/menu.component.d';

@Injectable({
	providedIn: 'root'
})
export class HttpService {

	private URL: string = "http://localhost:8080/get/2020-07-20";

	constructor (private http: HttpClient) { }

	getPhotos(): Observable<Photo[]> {
		return this.http.get<Photo[]>(this.URL);
	}
}
