import { PlacesService } from './../places.service';
import {SegmentChangeEventDetail} from '@ionic/core'

import { Place } from './../place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlace: Place[];
  listLoadPlace: Place[];

  constructor(private placesServices: PlacesService) { }

  ngOnInit() {
    this.loadedPlace = this.placesServices.places;
    this.listLoadPlace = this.loadedPlace.slice(1);
  }

  onFilterUpdate(event: CustomEvent<SegmentChangeEventDetail>){
    console.log(event.detail);
  }

}
