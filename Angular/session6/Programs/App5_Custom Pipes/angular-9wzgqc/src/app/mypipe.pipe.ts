import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe1'
})
export class MypipePipe implements PipeTransform 
{

  transform(value: any, args?: any): any
  {
    return (value*value*value);
  }

}