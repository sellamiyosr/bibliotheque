import { Component } from '@angular/core';
import { LivreserviceService } from '../livreservice.service';
import { Livre } from '../livre';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {

  livres: any;
  constructor(public livreService: LivreserviceService) { }
  ngOnInit(): void {
  this.livreService.getAll().subscribe((data: Livre[])=>{
  this.livres = data;
  }) 
  }
  deleteLivre(_id:object){
    this.livreService.delete(_id).subscribe(res => {
    this.livres = this.livres.filter((item: { _id: object; }) => item._id !== _id);
    console.log('Post deleted successfully!');
    })
    }
  
    filter(event: Event) {
      const filter = (event.target as HTMLInputElement).value;
      this.livres.filter = filter.trim().toLowerCase();
      }
}
