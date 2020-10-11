import { Component, OnInit } from '@angular/core';

export enum CategoryOptions {
	Clothing = 'clothing',
	Electronics = 'electronics',
	Healthcare = 'healthcare'
}

@Component({
	selector: 'shop-first',
	templateUrl: './first.component.html',
	styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
	// I did not completely understand what should be done here from task description
	name = 'First Component';
	description = 'Dummy component';
	price = 1000;
	isAvailable = true;
	exampleCategoryEnum: any = CategoryOptions;

	constructor() { }

	ngOnInit() {
	}

}
