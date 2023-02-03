import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferComponent } from './component/buffer/buffer.component';
import { OperatorsComponent } from './component/operators/operators.component';

const routes: Routes = [
{path:"", component: OperatorsComponent, children:[{path: "buffer",component:BufferComponent}]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
