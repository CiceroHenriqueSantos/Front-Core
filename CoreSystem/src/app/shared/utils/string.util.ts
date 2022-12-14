import { AbstractControl } from "@angular/forms";

export class StringUtil {
    public static isNullOrEmpty(value: string): boolean {
      return !value || (value?.trim().length === 0);
    }
  
    public static normalize(value: string): string | null {
      return value?.normalize('NFD').replace(/[^a-zA-Zs ]/g, '') || null;
    }
  
    public static normalizeWithNumbers(value: string): string | null {
      return value?.normalize('NFD').replace(/[^a-zA-Zs0-9- ]/g, '') || null;
    }
  
    public static normalizeCPF(value: string): string | null {
      return value?.replace(/[-.]/g, '') || null;
    }
  
    public static normalizeSpaceInside(value: string | null): string | null {
      return value?.replace(/\s/g, '') || null;
    }
  
    public static normalizeOnlyNumber(value: string): string {
      return value?.replace(/\D+/g, '');
    }
  
    public static normalizeCEP(value: string): string | null {
      return value?.replace(/[-._]/g, '') || null;
    }
  
    public static leftPad(value: string | number, totalWidth: number, paddingChar: string) {
      var length = totalWidth - value.toString().length + 1;
      return Array(length).join(paddingChar || '0') + value;
    }
  
    public static capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    }

    public static normalizeEmail(control: AbstractControl): { [key: string]: boolean } | null {
        const value: string = control.value;
        if (!value) return null;
    
        const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (regEx.test(value)) return null;
    
        return { notEmail: true };
      }
  }
  