import { Component, OnInit } from '@angular/core';
import { Auteur } from '../auteur';
import { AuteurserviceService } from '../auteurservice.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent  implements OnInit{

  auteurs: any;
constructor(public auteurService: AuteurserviceService) { }
ngOnInit(): void {
this.auteurService.getAll().subscribe((data: Auteur[])=>{
this.auteurs = data;
}) 
}
deleteAuteur(_id:object){
  this.auteurService.delete(_id).subscribe(res => {
  this.auteurs = this.auteurs.filter((item: { _id: object; }) => item._id !== _id);
  console.log('Post deleted successfully!');
  })
  }

  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.auteurs.filter = filter.trim().toLowerCase();
    }
}
