import { Pipe, PipeTransform } from '@angular/core';
import { ProductDetails } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: ProductDetails[], filterText: string): ProductDetails[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value.filter((p:ProductDetails)=>p.productName.toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
