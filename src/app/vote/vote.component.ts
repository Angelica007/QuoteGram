import { Component, OnInit } from '@angular/core';
import { Like } from '../like';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  insta:Like[] = [
    new Like(1,'Ludacris','I love technology. We can be our own DJs wherever we go.',new Date(2019,3,14)),
    new Like(2,'Khloe Kardashian','Fitness is not about being better than someone else... It is about being better than you used to be.',new Date(2019,3,14)),
    new Like(3,'Juan Pablo','Different people have different opinions, and it is okay to respect all of them.',new Date(2019,3,14)),
    new Like(4,'Miley Cyrus','The best part of my carreer is getting to meet so many different people, because I learn so much from everyone.',new Date(2019,3,14)),
    new Like(5,'Denise Morrison','There are going to be priorities and multiple dimensions of your life, and how you integrate that is how you find happiness.',new Date(2019,3,14)),
  ];

  toggleDetails(index){
    this.insta[index].showQuote = !this.insta[index].showQuote;
  }

  completeLike(isComplete, index){
    if (isComplete) {
      this.insta.splice(index,1);
    }
  }

  deleteLike(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.insta[index].quote}?`)

      if (toDelete){
        this.insta.splice(index,1)
      }
    }
  }

  addNewLike(tick){
    let tickLength = this.insta.length;
    tick.id = tickLength+1;
    tick.completeDate = new Date(tick.completeDate)
    this.insta.push(tick)
  }

  constructor() { }

  ngOnInit() {
  }

}
