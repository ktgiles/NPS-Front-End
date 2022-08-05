import { Component, OnInit } from '@angular/core';
import { ParkService } from '../services/park.service';
import { FlexLayoutModule } from "@angular/flex-layout";


@Component({
  selector: 'app-show-parks',
  templateUrl: './show-parks.component.html',
  styleUrls: ['./show-parks.component.css']
})
export class ShowParksComponent implements OnInit {

  parks: any[] = [];
  temp: any[] =[];

  constructor(private parkService: ParkService) { }

  ngOnInit() {

    this.parkService.getAllParks().subscribe({
      next:(response)=>{
        this.parks = response;
      }
    })
  }

  // search(state : string){

  //   this.parkService.getAllParks().subscribe({
  //     next:(response)=>{
  //       this.temp = response;
  //     }
  //   })

  //   this.parks.splice(0);

  //   for (const park of this.temp){
  //     if (park.state.toUpperCase().equals(state)){
  //       this.parks = park;
  //     }

  //   }
    
  // }

}
