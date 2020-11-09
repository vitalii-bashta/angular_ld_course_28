import { Injectable } from '@angular/core';

const LETTERS = 'abcdefghijklmnopqrstuvwxyz';
const NUMBERS = '0123456789';

@Injectable()
export class GeneratorService {
	private charset = `${LETTERS}${LETTERS.toUpperCase()}${NUMBERS}`;

	generate(length: number): string {
		const randomCharacters: string[] = [];

		for (let i = 0; i < length; i++) {
			const currentRandomIndex: number = Math.floor(Math.random() * this.charset.length);

			randomCharacters.push(this.charset[currentRandomIndex]);
		}

		return randomCharacters.join('');
	}
}
