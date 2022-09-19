import { Pipe, PipeTransform } from "@angular/core";
import { maskBr } from 'js-brasil';

@Pipe({
    name: 'cep',
  })
  export class CepPipe implements PipeTransform {
    transform(cpfValue: any): string {
      return maskBr.cpf(cpfValue);
    }
  }