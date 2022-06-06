import { Component, OnInit } from '@angular/core';
import { formData } from '../../model/form';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.scss']
})
export class DisplayformComponent implements OnInit {
  displayedColumns:string[]=['index','firstName','lastName','email',"phoneNumber"]

  constructor(private fs:FormService) { }
  formData:formData[]=[]
  

  ngOnInit(): void {
   this.formData= this.fs.array
  }




}
