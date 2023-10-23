import { Component } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-cliente-form',
	templateUrl: './cliente-form.component.html',
	styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent {
	public id: number = 0;
	public nome: string = '';
	public cpf: string = '';
	public dataNascimento: string = '';
	public celular: string = '';
	public email: string = '';

	constructor(
		public cliente_service: ClienteService,
		public activated_route: ActivatedRoute
	) {
		this.activated_route.params
		.subscribe(
			(params: any) => {

				if (params.indice == undefined) return;

				this.cliente_service.load(params.indice)
				.subscribe((_dado: any) => {
					this.id             = _dado.id;
					this.nome           = _dado.nome;
					this.cpf            = _dado.cpf;
					this.dataNascimento = _dado.dataNascimento;
					this.celular        = _dado.celular;
					this.email          = _dado.email;
				});
			}
		);
	}

	salvar() {
		if (this.nome == '') {
            document.querySelector('#nome')?.classList.add('has-error');
            return;
        }

		let dados = {
			nome: this.nome,
			cpf: this.cpf,
			dataNascimento: this.dataNascimento,
			celular: this.celular,
			email: this.email
		};
		if (this.id == 0) {
			this.cliente_service.salvar(dados).subscribe();
			this.cliente_service.listar();
		} else {
			this.cliente_service.editar(dados, this.id).subscribe();
		}
	}
}
