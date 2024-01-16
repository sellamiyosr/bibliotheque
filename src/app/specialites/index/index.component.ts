import { Component } from '@angular/core';
import { SepicialiteserviceService } from '../sepicialiteservice.service';
import { Specialite } from '../specialite';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {

  specialites: any;
  constructor(public sepicialiteService: SepicialiteserviceService) { }
  ngOnInit(): void {
    this.sepicialiteService.getAll().subscribe((data: Specialite[]) => {
      this.specialites = data;
    })
  }
  deleteSpecialite(_id: object) {
    this.sepicialiteService.delete(_id).subscribe(res => {
      this.specialites = this.specialites.filter((item: { _id: object; }) => item._id !== _id);
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
    this.specialites.filter = filter.trim().toLowerCase();
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
        this.deleteSpecialite(playerId);
      }
    });
  }

}
