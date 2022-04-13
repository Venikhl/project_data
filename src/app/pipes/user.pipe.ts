import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'user'
})
export class UserPipe implements PipeTransform {

  transform(value?: string): string {
    if(!value){
      return "This user doesn't have a position";
    }

    return value;
  }

}