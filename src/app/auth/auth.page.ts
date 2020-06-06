import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  constructor(
    private authService: AuthService,
    private route: Router,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

 onLogin(){
   this.authService.login();
  
   this.loadingCtrl
          .create({keyboardClose: true, message:'Logging in...'})
          .then(
            loadingEl =>{
               loadingEl.present();
               
               setTimeout(
                 () =>{
                  loadingEl.dismiss();
                  this.route.navigateByUrl('/places/tabs/discover');
                 
                 },100);
                
            }
          )
 }

}
