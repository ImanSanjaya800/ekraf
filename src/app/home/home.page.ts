import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  dataProfile:any = {
    nama_lengkap: '',
    jenis_kelamin: '',
    alamat: '',
    email: '',
    no_whatsapp: '',
    username: '',
    sebagai: ''
  }

  constructor(
    private service: ServicesService,
    private router: Router
  ) {}

  ionViewWillEnter(){
    this.checkProfile();
  }

  checkProfile(){
    this.service.getProfile().subscribe(
      (response:any) => {
        this.dataProfile.nama_lengkap = response[0]['nama_lengkap'];
        this.dataProfile.alamat = response[0]['alamat'];
      },
      (error) => {
        this.service.presentAlert('Kesalahan', 'Terjadi kesalahan saat pengambilan data profile. Silakan coba lagi.');
      }
    );
  }

}
