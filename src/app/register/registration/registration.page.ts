import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  
  cards = [
    { icon: 'game-controller', title: 'Game Developer', color: 'red', textColor: '#ffffff', iconColor: '#ffffff', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam pengembangan game.' },
    { icon: 'brush', title: 'Kriya', color: 'blue', textColor: '#ffffff', iconColor: '#ffffff', description: 'Isi bagian ini jika Anda ahli dalam seni kriya.' },
    { icon: 'home', title: 'Desain Interior', color: 'green', textColor: '#ffffff', iconColor: '#ffffff', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam desain interior.' },
    { icon: 'musical-notes', title: 'Musik', color: 'cyan', textColor: '#000000', iconColor: '#000000', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam musik.' },
    { icon: 'color-palette', title: 'Seni Rupa', color: 'cyan', textColor: '#000000', iconColor: '#000000', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam seni rupa.' },
    { icon: 'cube', title: 'Desain Produk', color: 'orange', textColor: '#ffffff', iconColor: '#ffffff', description: 'Isi bagian ini jika Anda ahli dalam desain produk.' },
    { icon: 'shirt', title: 'Fasion', color: 'pink', textColor: '#ffffff', iconColor: '#ffffff', description: 'Isi bagian ini jika Anda ahli dalam dunia fasion.' },
    { icon: 'restaurant', title: 'Kuliner', color: 'brown', textColor: '#ffffff', iconColor: '#ffffff', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam bidang kuliner.' },
    { icon: 'film', title: 'Film, Animasi dan Video', color: 'teal', textColor: '#ffffff', iconColor: '#ffffff', description: 'Isi bagian ini jika Anda ahli dalam film, animasi, dan video.' },
    { icon: 'camera', title: 'Fotografi', color: 'gold', textColor: '#000000', iconColor: '#000000', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam fotografi.' },
    { icon: 'musical-notes', title: 'Musik', color: 'cyan', textColor: '#000000', iconColor: '#000000', description: 'Isi bagian ini jika Anda ahli dalam musik.' },
    { icon: 'business', title: 'Arsitektur', color: 'cyan', textColor: '#000000', iconColor: '#000000', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam bidang arsitektur.' },
    { icon: 'megaphone', title: 'Periklanan', color: 'magenta', textColor: '#ffffff', iconColor: '#ffffff', description: 'Isi bagian ini jika Anda ahli dalam periklanan.' },
    { icon: 'film', title: 'Seni Pertunjukan', color: 'cyan', textColor: '#000000', iconColor: '#000000', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam seni pertunjukan.' },
    { icon: 'book', title: 'Penerbitan', color: 'white', textColor: '#000000', iconColor: '#000000', description: 'Isi bagian ini jika Anda ahli dalam penerbitan.' },
    { icon: 'apps', title: 'Aplikasi', color: 'yellow', textColor: '#000000', iconColor: '#000000', description: 'Isi bagian ini jika Anda memiliki keterampilan dalam pengembangan aplikasi.' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
