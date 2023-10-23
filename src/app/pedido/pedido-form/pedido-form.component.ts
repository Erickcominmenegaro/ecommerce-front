import { Component } from '@angular/core';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { PagamentoService } from 'src/app/pagamento/pagamento.service';
import { ProdutoService } from 'src/app/produto/produto.service';
import { PedidoService } from '../pedido.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-pedido-form',
	templateUrl: './pedido-form.component.html',
	styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent {
	public clientes: Array<any> = [];
	public produtos: Array<any> = [];
	public pagamentos: Array<any> = [];
	public id: number = 0;
	public descricao: string = '';
	public cliente: string = '';
	public produto: string = '';
	public quantidade: string = '';
	public valor: string = '';
	public pagamento: string = '';

	constructor(
		public cliente_service: ClienteService,
		public produto_service: ProdutoService,
		public pagamento_service: PagamentoService,
		public pedido_service: PedidoService,
		public activated_route: ActivatedRoute
	) {

		this.cliente_service.listar()
			.subscribe((snapshot: any) => {

				let response = snapshot.val();

				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							this.clientes.push({
								nome: e.nome,
								indice: Object.keys(snapshot.val())[i]
							});
						}
					);
			});

		this.produto_service.listar()
			.subscribe((snapshot: any) => {

				let response = snapshot.val();

				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							this.produtos.push({
								nome: e.nome,
								indice: Object.keys(snapshot.val())[i]
							});
						}
					);
			});

		this.pagamento_service.listar()
			.subscribe((snapshot: any) => {

				let response = snapshot.val();

				if (response == null) return;

				Object.values(response)
					.forEach(
						(e: any, i: number) => {
							this.pagamentos.push({
								nome: e.nome,
								indice: Object.keys(snapshot.val())[i]
							});
						}
					);
			});

		this.activated_route.params
			.subscribe(
				(params: any) => {

					if (params.indice == undefined) return;
					
					this.pedido_service.load(params.indice)
						.subscribe((_dado: any) => {
							this.id        = _dado.id;
							this.descricao = _dado.descricao;
							this.cliente   = _dado.cliente;
							this.produto   = _dado.produto;
							this.pagamento = _dado.pagamento;
						});
				}
			);
	}

	salvar() {
		let dados = {
			descricao: this.descricao,
			cliente: this.cliente,
			produto: this.produto,
			pagamento: this.pagamento
		};

		if (dados.descricao == '') {
			document.querySelector('#descricao')
				?.classList.add('has-error');
			return;
		}

		if (this.id == 0) {
			this.pedido_service.salvar(dados).subscribe();
			this.pedido_service.listar();
		} else {
			this.pedido_service.editar(dados, this.id).subscribe();
		}
	}
}