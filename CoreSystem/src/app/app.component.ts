import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from './models/person.model';
import { PersonService } from './services/person.service';
import { SnackBarService } from './services/snack-bar.service';
import { BaseComponent } from './shared/base.component';
import { DialogService } from './shared/dialog-result/dialog.service';
import { StringUtil } from './shared/utils/string.util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {

  title = 'CoreSystem';
  persons: Person[] = [];

  constructor(
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogService: DialogService,
    private personService: PersonService) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.search();
  }

  createForm(): void {
    this.form = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      nationality: [null, Validators.required],
      zipCode: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      address: [null, Validators.required],
      email: [null, Validators.required],
      phone: [null, Validators.required],
    });
  }

  search(): void {
    this.personService.getAll().subscribe(res => {
      this.persons = res;
      // this.pageable.recordCount = res.recordCount;
      // this.pageable.pageSize = res.recordsPerPage;
      // this.pageable.currentPage = res.currentPage;
    });
  }

  onPageChange(event: any) {
    this.pageable.currentPage = event.pageIndex + 1;
    this.pageable.pageSize = event.pageSize;
    this.search();
  }

  reset() {
    this.form.reset();
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const form = this.form.getRawValue();
    form.zipCode = StringUtil.normalizeCEP(form.zipCode);
    form.phone = StringUtil.normalizeOnlyNumber(form.phone);
    const oSave = form.id > 0 ? this.personService.updatePerson(form) : this.personService.addPerson(form);

    oSave.subscribe(() => {
      this.reset();
      this.search();
    });
  }

  edit(p: Person) {
    this.form.patchValue(p);
  }

  delete(id: number) {
    const data = {
      title: "Excluir",
      message: "Confirma a exclusão",
    };
    this.dialogService.openConfirmationDialog(data, {
      result: (confirmed: boolean) => {
        if (confirmed) {
          this.personService.delete(id).subscribe(
            () => {
              this.reset();
              // this.ngxService.hide();
              this.snackBarService.openSuccess([
                "Registro excluído com sucesso!"
              ]);
              this.search();
            }
          );
        }
      }
    });
  }
}
