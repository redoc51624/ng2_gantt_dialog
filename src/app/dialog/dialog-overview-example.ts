import { Component } from '@angular/core';
import { MdDialog } from '@angular/material';
// import { DialogOverviewExampleDialog } from './dialog-overview-example-dialog';
// import { DialogChildContent } from './dialog-child-content';
import { AppTab4Content } from './tab4-content';

@Component({
  selector: 'dialog-overview-example',
  templateUrl: './dialog-overview-example.html',
  styleUrls :['./dialog-overview-example.css']
})
export class DialogOverviewExample {
  constructor(private dialog: MdDialog) {}

  openDialog() {
    // this.dialog.open(DialogOverviewExampleDialog);
   this.dialog.open(AppTab4Content);
  }
}
