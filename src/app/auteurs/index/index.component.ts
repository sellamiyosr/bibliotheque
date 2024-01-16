import { Component, OnInit } from '@angular/core';
import { Auteur } from '../auteur';
import { AuteurserviceService } from '../auteurservice.service';
import Swal from 'sweetalert2';

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
  Swal.fire({
    title: 'Deleted!',
    text: 'Your file has been deleted.',
    icon: 'success'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload();
    }
  });


})
  }

  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.auteurs.filter = filter.trim().toLowerCase();
    }

    confirmDelete(playerId:Object): void {
      Swal.fire({
        title: 'Are you sure?',
        text: 'You won\'t be able to revert this!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d51d1d',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          // Call your delete function here
          this.deleteAuteur(playerId);
        }
      });
    }





  }
