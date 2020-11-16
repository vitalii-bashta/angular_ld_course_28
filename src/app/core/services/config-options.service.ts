import { Injectable } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';

import { ConfigOption } from '../models';

@Injectable()
export class ConfigOptionsService {
	private readonly config$: ReplaySubject<ConfigOption> = new ReplaySubject(1);

	getConfigStream(): Observable<ConfigOption> {
		return this.config$.asObservable();
	}

	//  ок, но вот этого нет Предусмотреть возможность установки подмножества свойств. Например, { id, login }
	pushValueToConfigStream(value: ConfigOption): void {
		this.config$.next(value);
	}
}
