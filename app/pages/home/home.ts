import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) {}

  ionViewDidEnter() {
    this.openModal();
  }

  openModal() {
    let modal = this.modalCtrl.create(ModalPage);

    // disable lifecycle events
    modal.fireOtherLifecycles = false;

    modal.present();
  }
}
