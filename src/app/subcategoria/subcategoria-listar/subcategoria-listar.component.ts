import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from '../subcategoria.service';
import { ToastrService } from 'ngx-toastr';

@Component({
	selector: 'app-subcategoria-listar',
	templateUrl: './subcategoria-listar.component.html',
	styleUrls: ['./subcategoria-listar.component.scss']
})
export class SubcategoriaListarComponent {
	public dados: Array<any> = [];
	constructor(
		public subcategoria_service: SubcategoriaService,
		public categoria_service: CategoriaService,
		public toastr: ToastrService,
		public router: Router
	) {
		this.ngOnInit();
	}

	ngOnInit(): void {
		this.listar();
	}

	listar() {
		this.subcategoria_service.listar()
			.subscribe(
				(_dados: any) => {
					console.log(_dados);
					
					//_dados.categoria = this.categoria_service.load(_dados.id);
					this.dados = _dados;
				}
			)
	}

	excluir(_id: number) {
		this.subcategoria_service.excluir(_id)
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
			.navigate(['/subcategoria/form/' + key]);
	}

	showSuccess() {
		this.toastr.success('Opoeação bem-sucedida!', 'Sucesso');
	}
}