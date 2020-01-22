import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/Usuario';
import { UsuarioService } from '../servico/usuario.service';
import { Router } from '@angular/router';
import { Token } from '../model/Token';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //declarando var para a mensagem de erro e sucesso
  private mensagem: number;

  //var do tipo Usuario
  private usuario: Usuario = new Usuario();

  constructor(private srv: UsuarioService, private router:Router) {

    this.mensagem = 0;
   }

  ngOnInit() {

    //pegando o token que está armazenado no navegador (localStorage)
    //se o token estiver lá, está ok, será direcionado para Produtos (listagem)
    if(localStorage.getItem("ConfirmToken")){
      this.router.navigate(['/produto'])
    }
  }

  //criando uma função para que eu possa enviar os dados e validar o login 

  enviarDados(){
    this.srv.autenticar(this.usuario).subscribe(
      (res: Token)=>{
        // se deu certo        
        // armazeno o token no LocalStorage
        localStorage.setItem("ConfirmToken", res.strToken);

        //indicando mensagem = 0, para não abrir a mensagem de erro
        this.mensagem = 0;

        //redirecionando para a página PRODUTOS
      this.router.navigate(['/produto']);
      },
      (err)=>{
        //mensagem = 1, para indicar a mensagem de erro
        this.mensagem = 1;
      }
    )
  }

}
