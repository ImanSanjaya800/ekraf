import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
    private router: Router,
    public alert: AlertController
  ) { }

  public async presentAlert(title:string, message:string) {
    const alert = await this.alert.create({
      header: title,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  public doLogin(email : any, password : any){
    return this.http.post(environment.api + '/login',
    {'username': email, 'password': password}, { responseType: 'json'});
  }

  public getProfile() {
    const headers = new HttpHeaders().set('Authorization', 'Bearer ' + localStorage.getItem('token'));
    return this.http.get<any>(environment.api + '/profile_user', { headers: headers });
  }

}
