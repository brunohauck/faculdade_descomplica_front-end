import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  addressForm = this.fb.group({
    email: ['', Validators.required, Validators.email],
    password: ['', Validators.required],
  });
  email = this.addressForm.controls['password'];

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private fb: FormBuilder, private autorizacaoService:AutorizacaoService) {}

  obterDescricaoLogin = () => 
  this.autorizacaoService.obterLoginStatus() ? "Estou Autorizado" : "Nao Estou Autorizado";

  loginClick() {
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else
      this.autorizacaoService.autorizar();
  }

  onSubmit(): void {
    this.loginClick();
    alert('Você cadastrou');
  }
}
