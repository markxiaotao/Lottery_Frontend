import { ViewResultComponent } from './view-result/view-result.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'upload', component: UploadResultComponent },
  { path: 'view', component: ViewResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
