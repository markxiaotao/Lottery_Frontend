import { MyNavComponent } from './my-nav/my-nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatFormFieldModule, MatInputModule
  , MatTableModule,
  MatSelectModule,
  MatOptionModule,
  MatRow,
  MatCell,
  MatSort,
  MatExpansionModule,
  MatDialogModule} from '@angular/material';
  import { MatSortModule } from '@angular/material/sort'; 
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadResultComponent } from './upload-result/upload-result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewResultComponent } from './view-result/view-result.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    UploadResultComponent,
    ViewResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule, 
    MatTableModule,
    MatSelectModule,
    MatOptionModule,
    MatExpansionModule,
    MatDialogModule,
    MatIconModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSortModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
