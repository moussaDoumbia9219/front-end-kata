import { Area } from './data/area';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'areaPipe'
})
export class AreaPipePipe implements PipeTransform {

  transform(items: any[], field: string, value: string): any[] {
    console.log(field);
    if(!items) return [];
    if(!value) return items;

    value = value.toLowerCase();
      if(field === 'area'){
        return items.filter( it => {
          return it[field].name.toLowerCase().includes(value);
        });
      } else {
        return items.filter( it => {
          return it[field].currentMatchday == value;
        });
      }

   }

}
