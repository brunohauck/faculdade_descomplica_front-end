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

  addressForm = this.fb.group({
    firstName: [null, Validators.required],
    email: ['', Validators.required, Validators.email],
    phone: [null, Validators.required],
    password: [null, Validators.required],
  });

  hasUnitNumber = false;
  email = this.addressForm.controls['password'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private fb: FormBuilder, private autorizacaoService:AutorizacaoService) {}



  onSubmit(): void {

    let user = new User();
    
    alert('Você cadastrou');
    localStorage.setItem('user', JSON.stringify(user));

  }
}