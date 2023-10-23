import { Injectable } from '@angular/core';
import { RequisicaoService } from '../requisicao.service';


@Injectable({
	providedIn: 'root'
})
export class ClienteService {

	constructor(
		private requisicao_service: RequisicaoService
	) { }

	salvar(fd: any) {
		return this.requisicao_service.post(fd, 'cliente');
	}

	editar(fd: any, id: number) {
		return this.requisicao_service.put(fd, 'cliente/' + id);
	}

	load(id: number) {
		return this.requisicao_service.get('/cliente/load/' + id);
	}

	listar() {
		return this.requisicao_service.get('/cliente/listar');
	}

	excluir(_id: number) {
		return this.requisicao_service.del('/cliente/' + _id);
	}

	get() {
		this.requisicao_service.get();
	}

}
