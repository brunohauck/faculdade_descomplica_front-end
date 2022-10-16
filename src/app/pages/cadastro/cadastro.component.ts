import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { catchError, EMPTY, tap } from 'rxjs';
import { User } from 'src/app/models/user';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  user: User = new User();  
  addressForm = this.fb.group({
    id: this.user.id,
    firstName: [this.user.firstName, Validators.required],
    email: [this.user.email, [Validators.required, Validators.email]],
    phone: [this.user.phone, Validators.required],
    password: [this.user.password, Validators.required],
  });

  hasUnitNumber = false;
  email = this.addressForm.controls['email'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private fb: FormBuilder, private autorizacaoService:AutorizacaoService) {}



  onSubmit(): void {
    this.user.id = '1';
    if(this.addressForm.controls['firstName'].value)
      this.user.firstName= this.addressForm.controls['firstName'].value;
    if(this.addressForm.controls['email'].value)
      this.user.email= this.addressForm.controls['email'].value;
    if(this.addressForm.controls['phone'].value)
      this.user.phone = this.addressForm.controls['phone'].value;  
    if(this.addressForm.controls['password'].value)
      this.user.password = this.addressForm.controls['password'].value;
      
    alert('Você cadastrou');
    console.log(this.user);
    localStorage.setItem('user', JSON.stringify(this.user));

  }
}