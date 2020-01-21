import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public getAllProduto(){
   
   /*localStorage é um objeto JavaScript que usamos para armazenar dados no navegador, tipo um cookie*/
   /*estou pegando o item ConfirmToken e deixando guardado no localStorage*/
    let token = localStorage.getItem("ConfirmToken");

    /*adicionando o token na url*/
    /*o usuário tem que estar logado para poder acessar a lista de produtos*/
    return this.http.get("http://localhost:8080/produto/todos?token" + token);
  }
}
