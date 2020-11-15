import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { FirstComponent } from './first.component';

@NgModule({
	imports: [
		SharedModule
	],
	declarations: [FirstComponent],
	exports: [FirstComponent]
})
export class FirstModule { }
