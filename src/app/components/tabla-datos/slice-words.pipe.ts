import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWords'
})
export class SliceWordsPipe implements PipeTransform {

  transform(value: string, start: number, end?: number): string {
    if (value == null) return "";

    return value
    .replace(/\s*\(.*?\)\s*/g, '')
    .split(" ")
    .splice(start, end)
    .join(" ");

  }
}
