import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-step-remove',
  templateUrl: './step-remove.component.html',
  styleUrls: ['./step-remove.component.css']
})
export class StepRemoveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() stepIndex: number;
  @Output() notifyStepRemove = new EventEmitter<number>();
  emitStepIndex() {
    this.notifyStepRemove.emit(this.stepIndex);
  }

}
