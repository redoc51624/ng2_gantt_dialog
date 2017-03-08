import { Component } from '@angular/core';
import { Http , Response } from '@angular/http';
import { MdDialog } from '@angular/material';
import { DialogChildContent } from './dialog-child-content';

@Component({
  selector: 'my-tab4-content', // <my-app></my-app>
  templateUrl: './tab4-content.html',
  styleUrls: ['./tab4-content.css'],
})
export class AppTab4Content {

    results: Object;
    constructor(http: Http, private dialog: MdDialog){
      this.results = [];
      http.get('https://api.myjson.com/bins/pbbt5').map((res: Response) => res.json())
      .subscribe(res => this.results = res);

  }

   openChildDialog() {
    this.dialog.open(DialogChildContent);
  }
  addSession(){

  }

}
