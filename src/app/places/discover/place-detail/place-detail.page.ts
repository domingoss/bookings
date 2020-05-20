import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { CreateBookingComponent } from 'src/app/bookings/create-booking/create-booking.component';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
    place: Place;
  constructor(
      private navCtrl: NavController,
      private modalCtrl: ModalController,
      private route: ActivatedRoute,
      private placesService: PlacesService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramap => {
     if(!paramap.has('placeId')){
         this.navCtrl.navigateBack('/places/tabs/discover');

         return;
     }

      this.place = this.placesService.getPlace(paramap.get('placeId'));

    })
    
  }
 onBooking(){
  


      this.modalCtrl.create({ 
        component: CreateBookingComponent,
        componentProps: {selectedPlace: this.place}

      })
      .then(modalEl => {
        modalEl.present();
        return modalEl.onDidDismiss();
      })
      .then( resultData => {
        console.log(resultData.data, resultData.role);
        if(resultData.role === 'confirm'){
          console.log('BOOKED!');
        }
      })
 }
}
