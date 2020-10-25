import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialSharedModule } from './angular-material/angular-material-shared.module';

import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
	declarations: [HighlightDirective],
	imports: [CommonModule],
	exports: [
		HighlightDirective,

		AngularMaterialSharedModule
	]
})
export class SharedModule { }
