import { Component, ElementRef, ViewChild } from '@angular/core';
import { Editeur } from '../editeur';
import { EditeurserviceService } from '../editeurservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  editeur: Editeur = new Editeur()

  constructor(private editeurService: EditeurserviceService) { }

  ajoutEditeur = () => {
    this.editeurService.create(this.editeur).subscribe((data => {
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
