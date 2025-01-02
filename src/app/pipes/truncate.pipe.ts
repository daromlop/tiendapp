import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
  standalone: true,
})
export class TruncatePipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    if (!value) {
      return '';
    }
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}

/* Un pipe en Angular es una función pura que acepta un valor de entrada, procesa este valor y devuelve un valor transformado. Se utilizan en las plantillas HTML para formatear los datos antes de que se presenten al usuario.

En este caso este pipe transforma el titulo del producto si este excede los 20 caracteres*/
