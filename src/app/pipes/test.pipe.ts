import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test',
  standalone: true
})
export class TestPipe implements PipeTransform {

  transform(value:number , pow:number): number {
    return Math.pow(value, pow);
  }

}
