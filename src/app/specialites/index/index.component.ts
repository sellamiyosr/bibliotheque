import { Component } from '@angular/core';
import { SepicialiteserviceService } from '../sepicialiteservice.service';
import { Specialite } from '../specialite';

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
      console.log('Post deleted successfully!');
    })
  }

  filter(event: Event) {
    const filter = (event.target as HTMLInputElement).value;
    this.specialites.filter = filter.trim().toLowerCase();
  }
}
