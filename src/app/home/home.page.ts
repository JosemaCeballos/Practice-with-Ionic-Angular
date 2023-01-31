import { Component, OnInit } from '@angular/core';
import {BarcodeScanner} from "@ionic-native/barcode-scanner/ngx"

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  scan(){
    this.barcodeScanner.scan()
      .then(barcodeData => {
        console.log('Barcode data', barcodeData);
      })
      .catch(err => {
        console.log('Error:', err)
      })
  }
}
