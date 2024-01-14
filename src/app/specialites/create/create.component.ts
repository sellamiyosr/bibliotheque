import { Component, ElementRef, ViewChild } from '@angular/core';
import { Specialite } from '../specialite';
import { SepicialiteserviceService } from '../sepicialiteservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  Specialite: Specialite = new Specialite()

  constructor(private SpecialiteService: SepicialiteserviceService) { }

  ajoutSpecialite = () => {
    this.SpecialiteService.create(this.Specialite).subscribe((data => {
      console.log(data)
       this.closeModal()
       window.location.reload();
    }))

  }
  openModal() {
    this.display = "block";
  }

  closeModal() {
    this.display = "none";
  }
}
