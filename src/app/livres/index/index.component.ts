import { Component } from '@angular/core';
import { Livre } from '../livre';
import { LivreserviceService } from '../livreservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  livres: Livre[] = [];
  constructor(private livreService:LivreserviceService){}

  ngOnInit():void{

    this.livreService.getAll().subscribe((data: Livre[])=>{
      this.livres = data;
      })
}
}
