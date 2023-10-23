import { Component } from '@angular/core';
import { CategoriaService } from 'src/app/categoria/categoria.service';
import { SubcategoriaService } from '../subcategoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-subcategoria-form',
	templateUrl: './subcategoria-form.component.html',
	styleUrls: ['./subcategoria-form.component.scss']
})
export class SubcategoriaFormComponent {
	public categorias: Array<any> = [];
	public id: number = 0;
	public descricao: string = '';
	public categoria: string = '';
	
	constructor(
		public categoria_service: CategoriaService,
		public subcategoria_service: SubcategoriaService,
		public activated_route: ActivatedRoute
	) {
		 
		this.categoria_service.listar()
			.subscribe(data => {
				console.log(data);
			});

		this.activated_route.params
			.subscribe(
				(params: any) => {

					if (params.indice == undefined) return;

					this.subcategoria_service.load(params.indice)
						.subscribe((_dado: any) => {
							this.id        = _dado.id;
							this.categoria = _dado.categoria;
							this.descricao = _dado.descricao;
						});
				}
			);
	}

	salvar() {
		if (this.descricao == '') {
            document.querySelector('#descricao')?.classList.add('has-error');
            return;
        }

		let dados = {
			descricao: this.descricao,
			categoria: this.categoria
		};
		if (dados.descricao == '') {
			document.querySelector('#descricao')
				?.classList.add('has-error');
			return;
		}
		if (this.id == 0) {
			this.subcategoria_service.salvar(dados).subscribe();
			this.subcategoria_service.listar();
		} else {
			this.subcategoria_service.editar(dados, this.id).subscribe();
		}
	}
}