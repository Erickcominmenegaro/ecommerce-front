import { Component, OnInit } from '@angular/core';
import { PagamentoService } from '../pagamento.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
	selector: 'app-pagamento-listar',
	templateUrl: './pagamento-listar.component.html',
	styleUrls: ['./pagamento-listar.component.scss']
})
export class PagamentoListarComponent implements OnInit {
	public dados: Array<any> = [];
	public count: any = 0;
	constructor(
		public pagamento_service: PagamentoService,
		public toastr: ToastrService,
		public router: Router
	) {
		this.ngOnInit();
	}

	ngOnInit(): void {
		this.listar();
	}

	listar(){
		this.pagamento_service.listar()
		.subscribe(
			(_dados:any) => {
				this.dados = _dados;
			}
		);
	}

	excluir(_id:number) {
		this.pagamento_service.excluir(_id)
		.subscribe(
			() => {
				this.listar();
			}
		);
		this.showSuccess();
	}

	editar(key: string) {
		this.router.navigate(['/pagamento/form/' + key]);
	}

	showSuccess() {
		this.toastr.success('Operação bem-sucedida!', 'Sucesso');
	}
}
