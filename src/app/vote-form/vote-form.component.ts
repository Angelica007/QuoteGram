import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Like } from '../like';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.css']
})
export class VoteFormComponent implements OnInit {

  newLike = new Like(0,"","",new Date()); 
  @Output() addLike = new EventEmitter<Like>();
  

  submitLike(){
    this.addLike.emit(this.newLike);
      }
   
  constructor() { }

  ngOnInit() {
  }

}
