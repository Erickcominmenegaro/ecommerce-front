import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-cliente-listar',
	templateUrl: './cliente-listar.component.html',
	styleUrls: ['./cliente-listar.component.scss']
})
export class ClienteListarComponent {
	public dados: Array<any> = [];
	constructor(
		public cliente_service: ClienteService,
		public router: Router
	) {
		this.ngOnInit();
	 }

	ngOnInit(): void {
		this.listar();
	}

	excluir(_id:number) {
		return this.cliente_service.excluir(_id)
		.subscribe(
			() => {
				this.listar();
			}
		);
	}

	listar(){
		this.cliente_service.listar()
		.subscribe(
			(_dados:any) => {
				this.dados = _dados;
			}
		);
	}

	editar(key: string) {
		this
			.router
			.navigate(['/cliente/form/' + key]);
	}
}
