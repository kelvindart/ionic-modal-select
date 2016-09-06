import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/*
  Generated class for the ModalPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/modal/modal.html',
})
export class ModalPage {
  language: any = "fr";

  constructor(private viewCtrl: ViewController) {}

  close() {
    this.viewCtrl.dismiss();
  }

}
