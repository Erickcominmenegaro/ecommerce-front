import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutoService } from '../produto.service';

@Component({
	selector: 'app-produto-listar',
	templateUrl: './produto-listar.component.html',
	styleUrls: ['./produto-listar.component.scss']
})
export class ProdutoListarComponent {
	public dados: Array<any> = [];
	constructor(
		public produto_service: ProdutoService,
		public router: Router
	) {
		this.ngOnInit();
	}

	ngOnInit(): void {
		this.listar();
	}

	listar() {
		this.produto_service.listar()
		.subscribe(
			(_dados: any) => {
				this.dados = _dados;
			}
		)
	}

	excluir(_id: number) {
		this.produto_service.excluir(_id)
			.subscribe(
				() => {
					this.listar();
				}
			);
	}

	editar(key: string) {
		this
			.router
			.navigate(['/produto/form/' + key]);
	}
}