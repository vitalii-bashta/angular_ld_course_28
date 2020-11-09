import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { FirstComponent } from './first.component';

@NgModule({
	imports: [
		CommonModule,

		SharedModule
	],
	declarations: [FirstComponent],
	exports: [FirstComponent]
})
export class FirstModule { }
