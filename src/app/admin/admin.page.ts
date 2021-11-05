import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';
declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  map = null;
  
  markers: Marker[] = [
    {
      position: {
        lat: 18.690673,
        lng: -100.190442,
      },
      title: 'Parque Simón Bolivar'
    },
  ];
  
  constructor(private authSvc: AuthService, private route:Router) {  }
  
  ngOnInit() {
    this.loadMap();
  }
  
  loadMap(){
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    // create map
    this.map = new google.maps.Map(mapEle, {
      center: {lat: 18.7915535,lng: -100.2442551},
      zoom: 12,
      disableDefaultUI:true
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
      mapEle.classList.add('show-map');
      this.renderMarkers();
    });
  }
  renderMarkers() {
    this.markers.forEach(marker => {
      this.addMarker(marker);
    });
  }
  
  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }

  back(){
    this.route.navigate(['/prueba']);
  }
}
