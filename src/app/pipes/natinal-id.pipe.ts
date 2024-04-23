import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'natinalId',
  standalone: true
})
export class NatinalIdPipe implements PipeTransform {

  transform(value: string, datePart: string): string{
    if (!value || value.length != 14)
      return "Invalid value";

    const year = value.slice(1, 3);
    const month = value.slice(3, 5);
    const day = value.slice(5, 7);

    switch (datePart) {
      case "YY":
        return year;
      case "MM":
        return month;
      case "DD":
        return day;
      case "FullDate":
        return `${year}-${month}-${day}`;
      default:
        return 'Invalid datePart';
    }
    
  }

}
