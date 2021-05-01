import { identifierModuleUrl } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FocusPostComponent } from './post/focus-post/focus-post.component';
import { NewComponent } from './post/new/new.component';
import { ViewComponent } from './post/view/view.component';

const routes: Routes = [
{
  path: "",
  component: ViewComponent
},
{
  path: "posts/new",
  component: NewComponent
},
{
path: "post/focus/:id",
component: FocusPostComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
