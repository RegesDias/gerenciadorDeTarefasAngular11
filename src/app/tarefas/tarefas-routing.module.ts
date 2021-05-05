
import { RouterModule, Routes } from '@angular/router';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefasComponent } from './editar';
import { ListarTarefasComponent } from './listar';

export const TarefaRoutes : Routes =[
    {
        path:'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path:'tarefas/listar',
        component: ListarTarefasComponent
    },
    {
        path:'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path:'tarefas/editar/:id',
        component:EditarTarefasComponent
    }
];
