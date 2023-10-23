import { Injectable } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

	constructor(
		private requisicao_service: RequisicaoService
	) { }

	salvar(fd: any) {
		return this.requisicao_service.post(fd, 'pedido');
	}

	editar(fd: any, id: number) {
		return this.requisicao_service.put(fd, 'pedido/' + id);
	}

	load(id: number) {
		return this.requisicao_service.get('/pedido/load/' + id);
	}

	listar() {
		return this.requisicao_service.get('/pedido/listar');
	}

	excluir(_id: number) {
		return this.requisicao_service.del('/pedido/' + _id);
	}

	get() {
		this.requisicao_service.get();
	}
}
