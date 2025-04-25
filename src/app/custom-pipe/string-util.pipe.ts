import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringUtil'
})
export class StringUtilPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    return value.split('').reverse().join('');
  }

}

@Pipe({
  name: 'addition'
})
export class AdditionPipe implements PipeTransform {
  transform(num1: number, num2: number): number {
    return num1 + num2;
  }
}