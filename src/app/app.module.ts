import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UnsubscribeObservableComponent } from './component/unsubscribe-observable/unsubscribe-observable.component';
import { OperatorsComponent } from './component/operators/operators.component';
import { BufferComponent } from './component/buffer/buffer.component';
import { StrengthPipe } from './pipes/strength.pipe';
import { PostsComponent } from './component/test/posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { SinglePostComponent } from './component/test/single-post/single-post.component';
import { PostDetailsComponent } from './component/test/post-details/post-details.component'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    UnsubscribeObservableComponent,
    OperatorsComponent,
    BufferComponent,
    StrengthPipe,
    PostsComponent,
    SinglePostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
