import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cep } from './models/cep.model';
import { Person } from './models/person.model';
import { CepService } from './services/cep.service';
import { PersonService } from './services/person.service';
import { SnackBarService } from './services/snack-bar.service';
import { BaseComponent } from './shared/base.component';
import { DialogService } from './shared/dialog-result/dialog.service';
import { StringUtil } from './shared/utils/string.util';
import { utilsBr } from 'js-brasil';
import { TextMaskConfig } from 'angular2-text-mask';
import { NavFlowItens } from './shared/components/navflow/models/navflow-itens';
import { NgBrazilValidators } from 'ng-brazil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {

  title = 'CoreSystem';
  persons: Person[] = [];
  MASKS = utilsBr.MASKS;
  maskPhone: TextMaskConfig = { mask: utilsBr.MASKS.telefone.textMask };
  maskCPF: TextMaskConfig = { mask: utilsBr.MASKS.cpf.textMask };


  navItems: NavFlowItens[] = [
    {
      title: 'Pagina Inicial',
      url: '/'
    },
    {
      title: 'Cadastro de Pessoas',
      url: '/'
    },
  ]


  constructor(
    private fb: FormBuilder,
    private snackBarService: SnackBarService,
    private dialogService: DialogService,
    private cepService: CepService,
    private personService: PersonService) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    this.search();
  }

  createForm(): void {

    const validatorDocument = [
      Validators.required,
      NgBrazilValidators.cpf,
    ];

    const validatorEmail = [
      Validators.required,
      StringUtil.normalizeEmail,
    ];

    this.form = this.fb.group({
      id: [null],
      name: [null, Validators.required],
      lastName: [null, Validators.required],
      nationality: [null, Validators.required],
      zipCode: [null, Validators.required],
      state: [null, Validators.required],
      city: [null, Validators.required],
      address: [null, Validators.required],
      email: [null, validatorEmail],
      phone: [null, Validators.required],
      federalId: [null, validatorDocument],
    });
  }

  search(): void {
    const filter = {
      page: this.pageable.currentPage,
      pageSize: this.pageable.pageSize
    }


    this.personService.getAll(filter).subscribe(res => {
      this.persons = res.data;
      this.pageable.recordCount = res.recordCount;
      this.pageable.pageSize = res.recordsPerPage;
      this.pageable.currentPage = res.currentPage;
    });
  }

  onPageChange(event: any) {
    this.pageable.currentPage = event.pageIndex + 1;
    this.pageable.pageSize = event.pageSize;
    this.search();
  }

  searchCep() {
    const cep = this.form.get('zipCode')?.value;

    if (cep == null || cep == undefined) return;
    const input = StringUtil.normalizeOnlyNumber(cep);
    if (input.length < 8) return;

    this.cepService.searchCep(cep)
      .subscribe(
        cepRetorn => this.setCep(cepRetorn));
  }

  setCep(cep: Cep) {
    this.form.patchValue({
      address: cep.logradouro,
      bairro: cep.bairro,
      zipCode: cep.cep,
      city: cep.localidade,
      state: cep.uf
    });
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
    form.federalId = StringUtil.normalizeCPF(form.federalId);
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
