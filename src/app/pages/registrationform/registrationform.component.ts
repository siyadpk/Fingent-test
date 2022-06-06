import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { validationMessage } from 'src/app/constants/form.constants';
import { FormService } from '../../services/form.service';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.scss']
})
export class RegistrationformComponent implements OnInit {

  form:FormGroup;
  ValidationMessage= validationMessage;
  
  constructor(private fb:FormBuilder ,private fs:FormService ,private router:Router) { 
    this.form=this.fb.group(
      {
        firstName:["",[Validators.required]],
        lastName:["",[Validators.required]],
        email:["",[Validators.required, Validators.email]],
        phoneNumber:["",[Validators.required,Validators.pattern("[0-9 ]{9,12}")]],
      }
    )
  }

  ngOnInit(): void {
  }

  submit(){
    if(this.form.valid){
      this.fs.formSubmit(this.form.value);
      this.form.reset()
      this.router.navigateByUrl('displayData')
    } else {
      this.form.markAllAsTouched();
      alert('Form is invalid');
    }
  }

}
