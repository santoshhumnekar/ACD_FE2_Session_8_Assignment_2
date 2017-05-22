import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

   complexForm : FormGroup;
   emailp = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)+(\.[a-z]{3,15})$';
	 mobp = '[0-9]{10}';
	 passp ='[a-z0-9]{7,20}';

  constructor(fb: FormBuilder){
    this.complexForm = fb.group({
      'Username': [null, Validators.required] ,
      'Email' : [null, Validators.compose([Validators.required, Validators.pattern(this.emailp)]) ],
      'password' : [null, Validators.compose([Validators.required, Validators.pattern(this.passp)]) ],
      'rpassword' : [null, Validators.compose([Validators.required, Validators.pattern(this.passp)]) ]
    })
  }

  submitForm(value: any){
    console.log(value);
  }

}
