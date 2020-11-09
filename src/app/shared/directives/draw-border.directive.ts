import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[shopDrawBorder]'
})
export class DrawBorderDirective {
	@Input('shopDrawBorder') borderColor: string;
	@HostListener('click', ['$event']) onClick(): void {
		this.renderer.setStyle(this.ref.nativeElement, 'border-color', this.borderColor);
	}

	constructor(
		private ref: ElementRef,
		private renderer: Renderer2
	) { }

}
