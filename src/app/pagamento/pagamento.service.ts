import { Injectable } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';

@Injectable({
	providedIn: 'root'
})
export class PagamentoService {


	constructor(
		private requisicao_service: RequisicaoService
	) { }

	salvar(fd: any) {
		return this.requisicao_service.post(fd, 'pagamento');
	}

	editar(fd: any, id: number) {
		return this.requisicao_service.put(fd, 'pagamento/' + id);
	}

	load(id: number) {
		return this.requisicao_service.get('/pagamento/load/' + id);
	}

	listar() {
		return this.requisicao_service.get('/pagamento/listar');
	}

	excluir(_id: number) {
		return this.requisicao_service.del('/pagamento/' + _id);
	}

	get() {
		this.requisicao_service.get();
	}
}
