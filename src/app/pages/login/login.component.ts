import { Component } from '@angular/core';
import { FormBuilder, FormControl, NgForm, Validators } from '@angular/forms';
import { AutorizacaoService } from 'src/app/services/autorizacao.service';
import { UserService } from 'src/app/services/user.service';

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

  constructor(
    private fb: FormBuilder,
    private service: UserService,
    private autorizacaoService: AutorizacaoService) { }

  obterDescricaoLogin = () =>
    this.autorizacaoService.obterLoginStatus() ? "Estou Autorizado" : "Nao Estou Autorizado";



  onSubmit(): void {
    if (this.autorizacaoService.obterLoginStatus())
      this.autorizacaoService.deslogar();
    else {
      this.service.login(this.addressForm.value).subscribe(
        {
          next: (response) => {
            console.log(response.token)
            if(response.token)
            this.autorizacaoService.autorizar(response.token);
          },
          error: (erro: any) => {
            console.log('entrou no erro')
            alert("Usuário ou Senha inválido(s)!");
            console.log(erro)
          }
        }
      )
    }
  }
}
