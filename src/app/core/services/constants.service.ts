import { Injectable } from '@angular/core';

import { Constants } from '../models';

export const constants: Constants = {
	App: 'TaskManager',
	Ver: '1.0',
	API_URL: 'http://www.google.com'
};

@Injectable()
export class ConstantsService {}
