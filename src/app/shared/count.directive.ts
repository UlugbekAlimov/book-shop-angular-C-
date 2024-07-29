import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appCountUp]',
  standalone: true 
})
export class CountUpDirective implements OnChanges {
  @Input() appCountUp: number | string = 0;
  
  private element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appCountUp']) {
      this.animateNumber();
    }
  }

  private animateNumber(): void {
    const startValue = 0;
    const endValue = Number(this.appCountUp);
    const duration = 1000;
    const stepTime = 50; 
    const steps = Math.ceil(duration / stepTime);
    const stepValue = (endValue - startValue) / steps;

    let currentValue = startValue;
    const interval = setInterval(() => {
      currentValue += stepValue;
      this.element.textContent = Math.round(currentValue).toString();

      if (currentValue >= endValue) {
        clearInterval(interval);
        this.element.textContent = endValue.toString();
      }
    }, stepTime);

    this.element.classList.add('count-up');
  }
}
