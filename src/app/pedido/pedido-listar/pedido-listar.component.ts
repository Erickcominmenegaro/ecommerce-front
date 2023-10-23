import { Component } from '@angular/core';
import { PedidoService } from '../pedido.service';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { PagamentoService } from 'src/app/pagamento/pagamento.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pedido-listar',
	templateUrl: './pedido-listar.component.html',
	styleUrls: ['./pedido-listar.component.scss']
})
export class PedidoListarComponent {
	public dados: Array<any> = [];
	constructor(
		public pedido_service: PedidoService,
		public cliente_service: ClienteService,
		public produto_service: ProdutoService,
		public pagamento_sevice: PagamentoService,
		public router: Router
	) {
		this.ngOnInit();
	}

	ngOnInit(): void {
		this.listar();
	}

	listar() {
		this.pedido_service.listar()
		.subscribe(
			(_dados: any) => {
				this.dados = _dados;
			}
		)
	}

	excluir(_id: number) {
		this.pedido_service.excluir(_id)
			.subscribe(
				() => {
					this.listar();
				}
			);
	}

	editar(key: string) {
		this
			.router
			.navigate(['/pedido/form/' + key]);
	}
}
