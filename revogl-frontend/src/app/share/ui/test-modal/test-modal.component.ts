import { Component, ElementRef, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IModal } from '../../data-access/modal/modal-interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-test-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test-modal.component.html',
  styleUrls: ['./test-modal.component.scss']
})
export default class TestModalComponent implements IModal{
  @Output() closeEvent = new EventEmitter();
  name = ''

  constructor(private elementRef: ElementRef){}

  close(): void{
    this.elementRef.nativeElement.remove()
    this.closeEvent.emit(this.name)
  }
}
