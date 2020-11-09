import { Component, Inject, OnDestroy, OnInit, Optional } from '@angular/core';
import { ReplaySubject } from 'rxjs';

import { takeUntil } from 'rxjs/operators';

import { ConfigOption } from '../core/models';
import {
	LocalStorageService,
	ConfigOptionsService,
	ConstantsService,
	constants,
	generatorToken,
	GeneratorFactory,
	GeneratorService
} from '../core/services';

const { log } = window.console;

export enum CategoryOptions {
	Clothing = 'clothing',
	Electronics = 'electronics',
	Healthcare = 'healthcare'
}

@Component({
	selector: 'shop-first',
	templateUrl: './first.component.html',
	styleUrls: ['./first.component.scss'],
	providers: [
		GeneratorService,
		{ provide: LocalStorageService, useClass: LocalStorageService },
		ConfigOptionsService,
		{ provide: ConstantsService, useValue: constants },
		{ provide: generatorToken, useFactory: GeneratorFactory(10), deps: [GeneratorService] },
	]
})
export class FirstComponent implements OnInit, OnDestroy {
	// I did not completely understand what should be done here from task description
	name = 'First Component';
	description = 'Dummy component';
	price = 1000;
	isAvailable = true;
	exampleCategoryEnum: any = CategoryOptions;
	descriptionBorderColor = 'blue';

	private destroySource$: ReplaySubject<void> = new ReplaySubject(1);

	constructor(
		@Optional() private localStorageService: LocalStorageService,
		@Optional() private configOptionsService: ConfigOptionsService,
		@Optional() private constantsService: ConstantsService,
		@Optional() @Inject(generatorToken) private generatedSequence: string
	) { }

	ngOnInit() {
		this.testStorageService();
		this.testConfigoptionsService();
		this.testConstantsService();
		this.testGeneratorService();
	}

	testStorageService(): void {
		if (this.localStorageService) {
			log('local storage service test');
			this.localStorageService.setItemToStorage('testKey', { prop: 1 });
			log(this.localStorageService.getItemFromStorage('testKey'));
			this.localStorageService.removeItemFromStorage('testKey');
			log(this.localStorageService.getItemFromStorage('testKey'));
		}
	}

	testConfigoptionsService(): void {
		if (this.configOptionsService) {
			this.configOptionsService.getConfigStream()
				.pipe(takeUntil(this.destroySource$))
				.subscribe((value: ConfigOption) => {
					log(value);
				});
			log('config options service test');
			this.configOptionsService.pushValueToConfigStream({ id: '1', login: 'test' });
			this.configOptionsService.pushValueToConfigStream({});
		}
	}

	testConstantsService(): void {
		if (this.constantsService) {
			log(this.constantsService);
		}
	}

	testGeneratorService(): void {
		if (this.generatedSequence) {
			log(this.generatedSequence);
		}
	}

	ngOnDestroy(): void {
		this.destroySource$.next(null);
		this.destroySource$.complete();
	}
}
