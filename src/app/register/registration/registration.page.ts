import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  cards = [
    { icon: 'game-controller', title: 'Game', color: 'red', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'brush', title: 'Kriya', color: 'blue', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'home', title: 'Desain Interior', color: 'green', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'musical-notes', title: 'Musik', color: 'purple', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'cube', title: 'Desain Produk', color: 'orange', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'shirt', title: 'Fasion', color: 'pink', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'restaurant', title: 'Kuliner', color: 'brown', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'film', title: 'Filem Animasi Video', color: 'teal', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'camera', title: 'Fotografi', color: 'gold', textColor: '#000000', iconColor: '#000000' },
    { icon: 'musical-notes', title: 'Musik', color: 'silver', textColor: '#000000', iconColor: '#000000' },
    { icon: 'business', title: 'Arsitektur', color: 'cyan', textColor: '#000000', iconColor: '#000000' },
    { icon: 'megaphone', title: 'Periklanan', color: 'magenta', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'film', title: 'Seni Pertunjukan', color: 'navy', textColor: '#ffffff', iconColor: '#ffffff' },
    { icon: 'book', title: 'Penerbitan', color: 'white', textColor: '#000000', iconColor: '#000000' },
    { icon: 'apps', title: 'Aplikasi', color: 'yellow', textColor: '#000000', iconColor: '#000000' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
