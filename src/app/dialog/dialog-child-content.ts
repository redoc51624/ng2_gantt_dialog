import { Component,Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { MdDialog } from '@angular/material';
import { RateSession }  from './rate-session';

@Injectable()
@Component({
  selector: 'dialog-child-content',
  templateUrl: './dialog-child-content.html',
  styleUrls: ['./dialog-child-content.css']
})
export class DialogChildContent {

    results: Object;
    constructor(http: Http,private dialog: MdDialog){
      this.results = [];
      http.get('https://api.myjson.com/bins/pbbt5').map((res: Response) => res.json())
      .subscribe(res => this.results = res);
    }

  openRateDialog() {
    // this.dialog.open(DialogOverviewExampleDialog);
   this.dialog.open(RateSession);
  }

}
