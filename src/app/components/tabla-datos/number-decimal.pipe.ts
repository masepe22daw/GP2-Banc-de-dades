import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'NumberDecimalPipe'
})
export class NumberDecimalPipe implements PipeTransform {

  transform(value: number): string {
    let v=value.toString

    if (value == 0 ) return "";

    return value.toFixed(2);

  }
}