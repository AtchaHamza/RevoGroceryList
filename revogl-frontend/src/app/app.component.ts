import { Component, ViewContainerRef } from '@angular/core';
import { ModalService } from './share/data-access/modal/modal.service';
import TestModalComponent from './share/ui/test-modal/test-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'revogl-frontend';
  tValue:any

  constructor(private modalService: ModalService, private viewContainerRef: ViewContainerRef){}

  openModal(){
    this.modalService.open(TestModalComponent, this.viewContainerRef, false).subscribe((a) =>{
      this.tValue = a.payload
    })
  }
}
