import { Component } from '@angular/core';
import type { Photo } from "./menu.component.d";
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';

@Component({
	selector: 'app-menu',
	standalone: true,
	imports: [
		FormsModule
	],
	templateUrl: './menu.component.html',
	styleUrl: './menu.component.css',
})

export class MenuComponent {

	constructor (private httpService: HttpService) { }
	
	selectedDate: string = '';
	photos: Photo[] = [];

	searchByDate(): void {
		this.httpService.getPhotos(this.selectedDate).subscribe({
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
