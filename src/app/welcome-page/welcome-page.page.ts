import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.page.html',
  styleUrls: ['./welcome-page.page.scss'],
})
export class WelcomePagePage {
  showSkip = true;

  constructor(
    public menu: MenuController,
    public router: Router
  ) {}

  startApp() {
    this.router
      .navigateByUrl('login', { replaceUrl: true })
      .then(() => localStorage.setItem('ion_did_welcome', 'true'));
  }

  ionViewWillEnter() {
    if(localStorage.getItem('ion_did_welcome') == 'true'){
      this.router.navigateByUrl('login', { replaceUrl: true });
    }
    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
