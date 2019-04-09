import { NgModule } from "@angular/core";
import {
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule
} from "@angular/material";

@NgModule({
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatDividerModule
  ]
})
export class AngularMaterialModule {}
