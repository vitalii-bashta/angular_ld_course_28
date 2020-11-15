import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
	transform(value: Array<{}>, field: string, descending: boolean = true): Array<{}> {
		const sortedArr = value.sort((a, b) => {
			if (a[field] > b[field]) {
				return descending ? 1 : -1;
			} else if (a[field] < b[field]) {
				return descending ? -1 : 1;
			} else {
				return 0;
			}
		});

		return sortedArr;
	}
}
