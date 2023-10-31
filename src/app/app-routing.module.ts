import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaFormComponent } from './categoria/categoria-form/categoria-form.component';
import { CategoriaListarComponent } from './categoria/categoria-listar/categoria-listar.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SubcategoriaComponent } from './subcategoria/subcategoria.component';
import { SubcategoriaFormComponent } from './subcategoria/subcategoria-form/subcategoria-form.component';
import { SubcategoriaListarComponent } from './subcategoria/subcategoria-listar/subcategoria-listar.component';
import { PagamentoFormComponent } from './pagamento/pagamento-form/pagamento-form.component';
import { PagamentoListarComponent } from './pagamento/pagamento-listar/pagamento-listar.component';
import { PagamentoComponent } from './pagamento/pagamento.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListarComponent } from './produto/produto-listar/produto-listar.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteListarComponent } from './cliente/cliente-listar/cliente-listar.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { PedidoComponent } from './pedido/pedido.component';
import { PedidoListarComponent } from './pedido/pedido-listar/pedido-listar.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { FornecedorListarComponent } from './fornecedor/fornecedor-listar/fornecedor-listar.component';
import { FornecedorFormComponent } from './fornecedor/fornecedor-form/fornecedor-form.component';
import { EstadoComponent } from './estado/estado.component';
import { EstadoListarComponent } from './estado/estado-listar/estado-listar.component';
import { EstadoFormComponent } from './estado/estado-form/estado-form.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioFormComponent } from './usuario/usuario-form/usuario-form.component';
import { UsuarioListarComponent } from './usuario/usuario-listar/usuario-listar.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';
import { GuardService } from './service/guard.service';


const routes: Routes = [
    { path: '', component: HomeComponent, canActivateChild:[GuardService]},
    { path: 'home', component: HomeComponent,
        canActivateChild:[GuardService]
    },
    {
        path: 'categoria', component: CategoriaComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: CategoriaListarComponent },
            { path: 'form', component: CategoriaFormComponent },
            { path: 'form/:indice', component: CategoriaFormComponent }
        ]
    },
    {
        path: 'subcategoria', component: SubcategoriaComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: SubcategoriaListarComponent },
            { path: 'form', component: SubcategoriaFormComponent },
            { path: 'form/:indice', component: SubcategoriaFormComponent }
        ]
    },
    {
        path: 'pagamento', component: PagamentoComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: PagamentoListarComponent },
            { path: 'form', component: PagamentoFormComponent },
            { path: 'form/:indice', component: PagamentoFormComponent }
        ]
    },
    {
        path: 'produto', component: ProdutoComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: ProdutoListarComponent },
            { path: 'form', component: ProdutoFormComponent },
            { path: 'form/:indice', component: ProdutoFormComponent }
        ]
    },
    {
        path: 'cliente', component: ClienteComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: ClienteListarComponent },
            { path: 'form', component: ClienteFormComponent },
            { path: 'form/:indice', component: ClienteFormComponent }
        ]
    },
    {
        path: 'pedido', component: PedidoComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: PedidoListarComponent },
            { path: 'form', component: PedidoFormComponent },
            { path: 'form/:indice', component: PedidoFormComponent }
        ]
    },
    {
        path: 'fornecedor', component: FornecedorComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: FornecedorListarComponent },
            { path: 'form', component: FornecedorFormComponent },
            { path: 'form/:indice', component: FornecedorFormComponent }
        ]
    },
    {
        path: 'estado', component: EstadoComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component: EstadoListarComponent },
            { path: 'form', component: EstadoFormComponent },
            { path: 'form/:indice', component: EstadoFormComponent }
        ]
    },
    {
        path: 'usuario', component: UsuarioComponent,
        children: [
            { path: '', redirectTo: 'listar', pathMatch: 'full' },
            { path: 'listar', component:UsuarioListarComponent },
            { path: 'form', component: UsuarioFormComponent },
            { path: 'form/:indice', component: UsuarioFormComponent }
        ]
    },
    {
        path:'login',component:AutenticacaoComponent
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
