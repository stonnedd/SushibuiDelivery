import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GetData} from '../../shared/get-data'


@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html'
})
export class OrdersPage {

  constructor(public navCtrl: NavController, 
  public navParams: NavParams, 
  private getData: GetData ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
  }

}
