import { Directive, HostListener, ElementRef } from '@angular/core';

const NUMBER_REGEX = /^(\-)?((([1-9]([0-9]+)?)|0)(\.(\d+)?)?)?/;

@Directive({
  selector: '[only-numbers]',
})
export class OnlyNumbersDirective {
  constructor(private elemRef: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp(): void {
    const inputValue = this.elemRef.nativeElement.value;
    if (inputValue && inputValue.length > 0) {
      this.elemRef.nativeElement.value = this.applyPattern(inputValue);
    }
  }

  private applyPattern(inputValue: string): string {
    const matches = inputValue.match(NUMBER_REGEX);
    return matches && matches.length ? matches[0] : '';
  }
}
