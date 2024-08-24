import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
  
    return items.filter(item => {
      // return Object.keys(item).some(key => {
        console.log(item.attributes.name)
        return String(item.attributes.name).toLowerCase().includes(searchText.toLowerCase()) || String(item.attributes.summary).toLowerCase().includes(searchText.toLowerCase());
      // });
    });
   }
}
