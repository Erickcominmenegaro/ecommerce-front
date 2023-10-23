import { Injectable } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Injectable({
	providedIn: 'root'
})
export class ProdutoService {

	constructor(
		private requisicao_service: RequisicaoService
	) { }

	salvar(fd: any) {
		return this.requisicao_service.post(fd, 'produto');
	}

	editar(fd: any, id: number) {
		return this.requisicao_service.put(fd, 'produto/' + id);
	}

	load(id: number) {
		return this.requisicao_service.get('/produto/load/' + id);
	}

	listar() {
		return this.requisicao_service.get('/produto/listar');
	}

	excluir(_id: number) {
		return this.requisicao_service.del('/produto/' + _id);
	}

	get() {
		this.requisicao_service.get();
	}
}