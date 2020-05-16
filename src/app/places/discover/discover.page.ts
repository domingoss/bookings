import { PlacesService } from './../places.service';
import { Place } from './../place.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlace: Place[];

  constructor(private placesServices: PlacesService) { }

  ngOnInit() {
    this.loadedPlace = this.placesServices.places;
  }

}
