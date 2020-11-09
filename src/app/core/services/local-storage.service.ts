import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
	private readonly storage: Storage = window.localStorage;

	getItemFromStorage(key: string): any {
		return JSON.parse(this.storage.getItem(key));
	}

	setItemToStorage(key: string, value: any): void {
		const jsonString: string = JSON.stringify(value);

		this.storage.setItem(key, jsonString);
	}

	removeItemFromStorage(key: string): void {
		this.storage.removeItem(key);
	}
}
