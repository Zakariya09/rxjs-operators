import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BufferComponent } from './component/buffer/buffer.component';
import { OperatorsComponent } from './component/operators/operators.component';
import { PostDetailsComponent } from './component/test/post-details/post-details.component';
import { PostsComponent } from './component/test/posts/posts.component';

const routes: Routes = [
  { path: "", component: OperatorsComponent, children: [{ path: "buffer", component: BufferComponent }] },

  { path: '/posts', component: PostsComponent },
  { path: '/details/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
