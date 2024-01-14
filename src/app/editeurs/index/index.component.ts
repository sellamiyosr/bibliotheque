import { Component } from '@angular/core';
import { EditeurserviceService } from '../editeurservice.service';
import { Editeur } from '../editeur';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  editeurs: any;
  constructor(public editeurService: EditeurserviceService) { }
  ngOnInit(): void {
  this.editeurService.getAll().subscribe((data: Editeur[])=>{
  this.editeurs = data;
  }) 
  }
  deleteEditeur(_id:object){
    this.editeurService.delete(_id).subscribe(res => {
    this.editeurs = this.editeurs.filter((item: { _id: object; }) => item._id !== _id);
    console.log('Post deleted successfully!');
    })
    }
  
    filter(event: Event) {
      const filter = (event.target as HTMLInputElement).value;
      this.editeurs.filter = filter.trim().toLowerCase();
      }
}
