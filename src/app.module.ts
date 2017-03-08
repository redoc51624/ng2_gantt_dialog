import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent ,} from './app/app.component';

import { ApiService } from './services';
import { routing } from './routes/app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { MaterialModule } from '@angular/material';
import { DialogOverviewExampleDialog } from './app/dialog/dialog-overview-example-dialog';
import {DialogOverviewExample} from './app/dialog/dialog-overview-example';
import  {DialogChild} from './app/dialog/dialog-child';
import  {DialogChildContent} from './app/dialog/dialog-child-content';
import {AppTab4Content} from './app/dialog/tab4-content';
import {RateSession} from './app/dialog/rate-session';
import { PerfectScrollbarModule } from 'angular2-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'angular2-perfect-scrollbar';
import { GanttChart } from 'angular-gantt-chart';

// import { MdCoreModule } from '@angular2-material/core',
// import { MdButtonModule } from '@angular2-material/button';
// import { MdCardModule } from '@angular2-material/card';
// import { MdRadioModule } from '@angular2-material/radio';
// import { MdCheckboxModule } from '@angular2-material/checkbox'
// import { MdTooltipModule } from '@angular2-material/tooltip';
// import { MdSliderModule } from '@angular2-material/slider';
const PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
@NgModule({
  imports: [
    BrowserModule,
    GanttChart,
    HttpModule,
    FormsModule,
    routing,
    MaterialModule,
    PerfectScrollbarModule.forRoot(PERFECT_SCROLLBAR_CONFIG)
    //  MdCoreModule, MdCardModule, MdButtonModule, MdRadioModule,
    // MdCheckboxModule, MdTooltipModule, MdSliderModule
  ],
  declarations: [
    AppComponent,DialogOverviewExample,
    DialogOverviewExampleDialog,DialogChild,
    DialogChildContent,AppTab4Content,RateSession,

  ],
  entryComponents:[DialogOverviewExample,DialogOverviewExampleDialog,DialogChild,DialogChildContent,RateSession],

  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
