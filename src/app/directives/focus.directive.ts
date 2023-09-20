import {AfterViewInit, Directive, ElementRef, OnInit} from '@angular/core'

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective implements OnInit, AfterViewInit{
  ngAfterViewInit(): void {
    this.el.nativeElement.focus()
  }

  ngOnInit(): void {
  }

  constructor(private el: ElementRef) { }

}
