import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiply'
})
export class MultiplyPipe implements PipeTransform {

  transform(value: any, ...args: any[]) {
    return value * args[0] * args[1];
  }

}
