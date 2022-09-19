import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

// material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
// import { FlexLayoutModule } from '@angular/flex-layout';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule, MatDateRangePicker } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
	imports: [
		CommonModule,
		MatInputModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatTooltipModule,
		MatCardModule,
		MatSelectModule,
		MatPaginatorModule,
		MatSlideToggleModule,
		MatDialogModule,
		MatMenuModule,
		FlexLayoutModule,
		MatStepperModule,
		MatRadioModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatExpansionModule,
		MatTabsModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatChipsModule,
		MatSnackBarModule,
		MatAutocompleteModule
	],
	exports: [
		MatInputModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatButtonModule,
		MatIconModule,
		MatTableModule,
		MatFormFieldModule,
		MatInputModule,
		MatTooltipModule,
		MatCardModule,
		MatSelectModule,
		MatPaginatorModule,
		MatSlideToggleModule,
		MatDialogModule,
		MatMenuModule,
		FlexLayoutModule,
		MatStepperModule,
		MatRadioModule,
		MatCheckboxModule,
		MatProgressSpinnerModule,
		MatExpansionModule,
		MatTabsModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatChipsModule,
		MatSnackBarModule,
		MatAutocompleteModule
	],
})
export class AppMaterialModule { }