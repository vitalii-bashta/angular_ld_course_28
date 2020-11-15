import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularMaterialSharedModule } from './angular-material/angular-material-shared.module';

import { HighlightDirective, DrawBorderDirective } from './directives';
import { OrderByPipe } from './pipes';

@NgModule({
	declarations: [HighlightDirective, DrawBorderDirective, OrderByPipe],
	imports: [CommonModule],
	exports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,

		AngularMaterialSharedModule,

		HighlightDirective,
		DrawBorderDirective,
		OrderByPipe
	]
})
export class SharedModule { }
