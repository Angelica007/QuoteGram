import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Like } from '../like';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.css']
})
export class VoteFormComponent implements OnInit {

  @Output() addlike = new EventEmitter<Like>();
  newLike: Like;
  

  submitLike(){
    this.addlike.emit(this.newLike);
      }
  constructor() { }

  ngOnInit() {
  }

}
