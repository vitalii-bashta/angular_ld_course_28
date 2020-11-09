import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialSharedModule } from './angular-material/angular-material-shared.module';

import { HighlightDirective, DrawBorderDirective } from './directives';

@NgModule({
	declarations: [HighlightDirective, DrawBorderDirective],
	imports: [CommonModule],
	exports: [
		HighlightDirective,
		DrawBorderDirective,

		AngularMaterialSharedModule
	]
})
export class SharedModule { }
