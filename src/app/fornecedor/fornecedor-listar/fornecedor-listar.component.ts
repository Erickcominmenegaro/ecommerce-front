import { Component } from '@angular/core';
import { FornecedorService } from '../fornecedor.service';
import { EstadoService } from 'src/app/estado/estado.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-fornecedor-listar',
    templateUrl: './fornecedor-listar.component.html',
    styleUrls: ['./fornecedor-listar.component.scss']
})
export class FornecedorListarComponent {
    public dados: Array<any> = [];
    constructor(
        public fornecedor_service: FornecedorService,
        public router: Router
    ) { }

    ngOnInit(): void {
        this.fornecedor_service.listar()
            .on('value', (snapshot: any) => {

                // Limpa variavel local com os dados
                this.dados.splice(0, this.dados.length);

                // Dados retornados do Firebase
                let response = snapshot.val();

                // Não setar valores caso não venha
                // nenhum registro
                if (response == null) return;

                // Percorre a coleção de dados 
                Object.values(response)
                    .forEach(
                        (e: any, i: number) => {

                            this.dados.push({
                                razaoSocial: e.razaoSocial,
                                cnpj: e.cnpj,
                                contato: e.contato,
                                indice: Object.keys(snapshot.val())[i]
                            });
                        }
                    );
            });
    }

    excluir(key: string) {
        this.fornecedor_service.excluir(key);
    }

    editar(key: string) {
        this
            .router
            .navigate(['/fornecedor/form/' + key]);
    }
}
