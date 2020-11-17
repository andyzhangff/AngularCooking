import { Component, OnInit , Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-ingrediant-remove',
  templateUrl: './ingrediant-remove.component.html',
  styleUrls: ['./ingrediant-remove.component.css']
})
export class IngrediantRemoveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() ingrediantIndex: number;
  @Output() notifyIngrediantRemove = new EventEmitter<number>();
  emitIngrediantIndex() {
    this.notifyIngrediantRemove.emit(this.ingrediantIndex);
  }



}
