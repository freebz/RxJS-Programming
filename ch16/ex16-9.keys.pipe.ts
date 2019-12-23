// 코드 16-9 객체를 입력받아서 해당 객체의 키를 리턴하는 파이프

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'keys'
})
export class KyesPipe implements PipeTransform {
    transform(value: object, args?: any): any[] {
	return Object.keys(value);
    }
}
