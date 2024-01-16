import { Component } from '@angular/core';
import { LivreserviceService } from '../livreservice.service';
import { Livre } from '../livre';
import Swal from 'sweetalert2';

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

  console.log(this.livres);
  
  }
  deleteLivre(_id:object){
    this.livreService.delete(_id).subscribe(res => {
    this.livres = this.livres.filter((item: { _id: object; }) => item._id !== _id);
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
      this.livres.filter = filter.trim().toLowerCase();
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
            this.deleteLivre(playerId);
          }
        });
      }
  
}
