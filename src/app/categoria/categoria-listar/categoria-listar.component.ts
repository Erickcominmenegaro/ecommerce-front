import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
	selector: 'app-categoria-listar',
	templateUrl: './categoria-listar.component.html',
	styleUrls: ['./categoria-listar.component.scss']
})
export class CategoriaListarComponent {
	public dados: Array<any> = [];
	public count: any = 0;
	constructor(
		public categoria_service: CategoriaService,
		public toastr: ToastrService,
		public router: Router
	) {
		this.ngOnInit();
	}

	ngOnInit(): void {
		this.listar();
	}

	listar(){
		this.categoria_service.listar()
		.subscribe(
			(_dados:any) => {
				this.dados = _dados;
			}
		);
	}

	excluir(_id:number) {
		this.categoria_service.excluir(_id)
		.subscribe(
			() => {
				this.listar();
			}
		);
		this.showSuccess();
	}

	editar(key: string) {
		this
			.router
			.navigate(['/categoria/form/' + key]);
	}

	showSuccess() {
		this.toastr.success('Operação bem-sucedida!', 'Sucesso');
	}
}
