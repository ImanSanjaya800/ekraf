import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username:any;
  password:any;

  constructor(
    private service: ServicesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillLeave(){
    this.clearedInput();
  }

  clearedInput(){
    this.username = null;
    this.password = null;
  }

  validatedInput(){

    var result : boolean = true;
    
    if(this.username == null || this.username == ''){
      this.service.presentAlert('Peringatan', 'Mohon Isi Email Anda');
      result = false;
    }

    if(this.password == null || this.password == ''){
      this.service.presentAlert('Peringatan', 'Mohon Isi Password Anda');
      result = false;
    }

    return result;
  }

  doLogin(){
    if(this.validatedInput()){
      this.service.doLogin(this.username, this.password).subscribe(
        (response:any) => {
          if (response['status'] === 'Success') {
            localStorage.setItem('token',response['token']);
            this.service.presentAlert('Berhasil Login', 'Selamat Datang!.');
            this.router.navigateByUrl('/home');
          }
        },
        (error) => {
          if(error.status === 401){
            this.service.presentAlert('Gagal Login', 'Username atau Password salah, silakan coba lagi.'); 
          }else{
            this.service.presentAlert('Kesalahan', 'Terjadi kesalahan saat login. Silakan coba lagi.');
          }
        }
      );
    }
  }

}
