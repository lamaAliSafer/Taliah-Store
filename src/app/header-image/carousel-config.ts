import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { transition, trigger, state, style, animate } from '@angular/animations';

@Component({
    selector: 'app-header-image',
    templateUrl: './header-image.component.html',
    styleUrls: ['./header-image.component.scss'],
    providers: [NgbCarouselConfig] , // add NgbCarouselConfig to the component providers
    animations: [
        trigger('carouselImage', [
          state('focus', style({ left: '0' })),
          state('right', style({ left: '100%' })),
          state('left', style({ left: '-100%' })),
          transition('* <-> focus', animate('.5s ease-out'))
        ])
    ]
  })
export class NgbdCarouselConfig {
    carouselImages = [
        '/assets/بديل-رخام-1١.jpg',
        '/assets/بلاط-الالمنيوم.jpg',
        '/assets/سلالم-١.jpg'
      ]
      /** The current image by index */
      currentImage: number;
    
      constructor() {
        this.currentImage = 0;
      }
    
      /** Get the state of an image by its index */
      getState(index: number): 'right' | 'left' | 'focus' {
        if (this.currentImage === 0 && index === this.carouselImages.length - 1) return 'left';
        if (this.currentImage === this.carouselImages.length - 1 && index === 0) return 'right';
        if (index < this.currentImage) return 'left';
        if (index > this.currentImage) return 'right';
        return 'focus';
      }
    
      /** Change the current image by 1 in either direction */
      changeImage(direction: number): void {
        if (direction < 0 && this.currentImage === 0) this.currentImage = this.carouselImages.length - 1;
        else if (direction > 0 && this.currentImage + 1 >= this.carouselImages.length) this.currentImage = 0;
        else this.currentImage += direction;
      }
}
