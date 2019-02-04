import { Component, Renderer2 } from '@angular/core';
import { TextDirectionController } from 'src/shared/TextDirectionController';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rtlAngular';

  public directionController = new TextDirectionController();

  constructor(
    private renderer: Renderer2
  ){ 
    // set text direction to body 
    // this.renderer.setAttribute(document.body, 'dir', this.directionController.textDirection);
  }
}
