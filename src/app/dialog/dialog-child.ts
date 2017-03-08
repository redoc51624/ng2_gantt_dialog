



//  <button md-button class="child-button" (click)="openChildDialog()">Open child dialog</button>
import { MdDialog } from '@angular/material';
import { DialogChildContent } from './dialog-child-content';
import { Component} from '@angular/core';

@Component({
  selector: 'dialog-child',
  templateUrl: './dialog-child.html',
  styleUrls :['./dialog-child.css']
})
export class DialogChild {
  constructor(private dialog: MdDialog) {}

  openChildDialog() {
    this.dialog.open(DialogChildContent);
  }
}
