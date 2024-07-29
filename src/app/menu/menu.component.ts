import { Component } from '@angular/core';
import type { Photo } from "./menu.component.d";
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [
	],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.css',
})

export class MenuComponent {

	constructor (private httpService: HttpService) { }

	photos: Photo[] = [];

	ngOnInit(): void {
		this.loadPhoto();
	}

	loadPhoto(): void {
		this.httpService.getPhotos().subscribe({
			next: (data: any) => {
				this.photos = data;
			},
			error: (error: any) => {
				console.log("Error al obtener fotos", error);
			},
			complete: () => {
				console.log("Completado con exito");
			}
		}
		)
	}

}
