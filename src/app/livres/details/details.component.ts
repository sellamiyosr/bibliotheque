import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreserviceService } from '../livreservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  livreId!: object;
  livreservice: any;

  constructor(private route:ActivatedRoute,private livreserviceService:LivreserviceService){}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.livreId = params["livreId"];      
      this.livreserviceService.findById(Object(this.livreId)).subscribe(livreservice =>{
        this.livreservice=livreservice
        console.log('livreservice',livreservice);
      })
    }); 
  }

}
