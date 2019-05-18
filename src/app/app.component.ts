import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ex002-reactiveform';

  userForm: FormGroup;
  myPseudo: string;
  myFirstName: string;
  myLastName: string;
  myEmail: string;
  myPhone: string;

  constructor(private formBuilder: FormBuilder) {};

  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.userForm = this.formBuilder.group({
      pseudo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['']
    })
  }

  onSubmitForm() {
    const formValue = this.userForm.value;
    
    this.myPseudo=formValue['pseudo'];
    this.myFirstName=formValue['firstName'];
    this.myLastName=formValue['lastName'];
    this.myEmail=formValue['email'];
    this.myPhone=formValue['phone'];


  }
}
