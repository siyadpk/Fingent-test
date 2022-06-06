import { Injectable } from '@angular/core';
import { formData } from '../model/form';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  array:formData[]=[]

  constructor() { }
  formSubmit(data:formData){

    this.array.push(data)
    console.log(this.array);
    

  }

}
