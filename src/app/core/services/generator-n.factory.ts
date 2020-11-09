import { InjectionToken } from '@angular/core';
import { GeneratorService } from './generator.service';

export const generatorToken = new InjectionToken<string>('random sequence generator');

export function GeneratorFactory(n: number) {
	return (generatorService: GeneratorService): string => {
		return generatorService.generate(n);
	};
}
