import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
	selector: '[shopHighlight]'
})
export class HighlightDirective {
	@HostBinding('style.background-color') backGroundColor: string;

	@HostListener('mouseenter') onMouseEnter() {
		this.backGroundColor = '#f3f3f3';
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.backGroundColor = '';
	}

}
