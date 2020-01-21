import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/Produto';
import { ProdutoService } from '../servico/produto.service';

/*direciona para uma nova página*/
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  //criando um vetor para os produtos 
  lista: Produto[];

  constructor(private srv: ProdutoService, private route: Router) { }

  ngOnInit() {
    if(localStorage.getItem("ConfirmToken")){
      this.srv.getAllProduto().subscribe(
        (res: Produto[])=> {
          this.lista = res; 
        },
        (err) => {
          this.route.navigate(['/produto'])
        }
      );
    }
    else{
      this.route.navigate(['/home'])
    }
  }

}
