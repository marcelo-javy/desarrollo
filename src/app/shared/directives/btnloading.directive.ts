import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[Btnloading]'
})
export class BtnloadingDirective implements OnInit{

  textInit: string = "";
  loading: boolean = false;
  @Input() textInput: string = "";

  constructor(private elementRef: ElementRef<HTMLButtonElement>,
              private renderer:Renderer2) {
  }
    ngOnInit()
    {
      this.textInit = this.elementRef.nativeElement.innerHTML;
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML',this.textInput);
      this.renderer.addClass(this.elementRef.nativeElement, 'btn btn-outline-success');
    }
    //elementRef.nativeElement.className ='btn';
    //elementRef.nativeElement.innerHTML ='Modificado desde la directiva';

  @HostListener('click')
  onClick() {
    console.log('Click Directive')

    if (this.loading) {
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHtml', '<span class=spinner-border-sm" role=status" aria-hidden="true"></span> Loading..')
    }else {
      this.renderer.setProperty(this.elementRef.nativeElement, 'innerHTML',this.textInit);
    }
    this.loading = !this.loading
  }
  /*
  @HostListener('mouseenter')
  onMouseEnter(){
    this.renderer.removeClass(this.elementRef.nativeElement, 'btn btn-outline-success');
    this.renderer.addClass(this.elementRef.nativeElement, 'btn btn-outline-primary');
    console.log('mouseenter')
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this.renderer.removeClass(this.elementRef.nativeElement, 'btn btn-outline-success');
    this.renderer.addClass(this.elementRef.nativeElement, 'btn btn-outline-primary');
    console.log('onMouseLeave')
  }
  */
}
