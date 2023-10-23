import { Component } from '@angular/core';
import { PagamentoService } from '../pagamento.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-pagamento-form',
    templateUrl: './pagamento-form.component.html',
    styleUrls: ['./pagamento-form.component.scss']
})
export class PagamentoFormComponent {
    public id: number = 0;
    public tipoPagamento: string = '';

    constructor(
        public pagamento_service: PagamentoService,
        public activated_route: ActivatedRoute,
    ) {
        this.activated_route.params
            .subscribe(
                (params: any) => {

                    if (params.indice == undefined) return;

                    this.pagamento_service.load(params.indice)
                        .subscribe((_dado: any) => {
                            this.id = _dado.id;
                            this.tipoPagamento = _dado.tipoPagamento;
                        });
                }
            );
    }

    salvar() {
        let dados = {
            tipoPagamento: this.tipoPagamento,
        };

        if (dados.tipoPagamento.trim() == '') {
            document.querySelector('#tipoPagamento')
                ?.classList.add('has-error');

            return;
        }

        if (this.id == 0) {
			this.pagamento_service.salvar(dados).subscribe();
			this.pagamento_service.listar();
		} else {
			this.pagamento_service.editar(dados, this.id).subscribe();
		}
    }
}
