import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceCardComponent } from './dice-card/dice-card.component';
import { RollsHistoryComponent } from './rolls-history/rolls-history.component';

@NgModule({
  declarations: [
    AppComponent,
    DiceCardComponent,
    RollsHistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
