import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Like } from '../like';

@Component({
  selector: 'app-vote-detail',
  templateUrl: './vote-detail.component.html',
  styleUrls: ['./vote-detail.component.css']
})
export class VoteDetailComponent implements OnInit {

  @Input() tick: Like;
  @Output() isComplete = new EventEmitter<boolean>();

  tickDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
