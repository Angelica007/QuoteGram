import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VoteComponent } from './vote/vote.component';
import { VoteDetailComponent } from './vote-detail/vote-detail.component';
import { DateCountPipe } from './date-count.pipe';
import { VoteFormComponent } from './vote-form/vote-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VoteComponent,
    VoteDetailComponent,
    DateCountPipe,
    VoteFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
