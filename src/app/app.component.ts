import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

const APP_TITLE = 'Store';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild('appTitle', { static: true }) title: ElementRef;

	constructor(private renderer: Renderer2) {}

	ngOnInit(): void {
		this.renderer.setProperty(this.title.nativeElement, 'textContent', APP_TITLE);
	}
}
