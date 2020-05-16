import { PlacesService } from './../../places.service';
import { Component, OnInit } from '@angular/core';
import { Place } from '../../place.model';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  constructor(  
               private placesService: PlacesService,
               private route: ActivatedRoute,
               private navCtrl: NavController
               ) { }

  ngOnInit() {

    this.route.paramMap.subscribe(param =>{
      if(!param.has('placeId')){
        this.navCtrl.navigateBack('places/tabs/offers');
        return
      }

      this.place = this.placesService.getPlace(param.get('placeId'));
    })
  }

}
